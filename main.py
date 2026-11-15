import os
from typing import Literal
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import joblib
import pandas as pd

app = FastAPI(
    title="Mental Health Score Predictor API",
    description="API for predicting Mental Health Score based on user lifestyle and social media habits."
)

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained pipeline
MODEL_PATH = os.path.join(os.path.dirname(__file__), "mental_health_model.pkl")
try:
    model = joblib.load(MODEL_PATH)
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define Pydantic Schema with exact feature types & options
class AssessmentInput(BaseModel):
    # Numerical features
    Study_Hours: float = Field(..., ge=0.0, le=24.0, description="Daily study hours (e.g., 3.0)")
    Age: int = Field(..., ge=10, le=100, description="Age in years (e.g., 21)")
    Avg_Daily_Usage_Hours: float = Field(..., ge=0.0, le=24.0, description="Average daily screen usage hours (e.g., 4.5)")
    Daily_Unlocks: int = Field(..., ge=0, le=1000, description="Number of phone unlocks per day (e.g., 150)")
    Physical_Activity_Hours: float = Field(..., ge=0.0, le=24.0, description="Daily physical activity in hours (e.g., 1.5)")
    Sleep_Hours_Per_Night: float = Field(..., ge=0.0, le=24.0, description="Hours of sleep per night (e.g., 7.0)")
    
    # Categorical features
    Stress_Level: Literal["Low", "Medium", "High", "Very High"]
    Gender: Literal["Female", "Male"]
    Academic_Level: Literal["Graduate", "High School", "Undergraduate"]
    Most_Used_Platform: Literal[
        "Facebook", "Instagram", "KakaoTalk", "LINE", "LinkedIn",
        "Snapchat", "TikTok", "Twitter", "VKontakte", "WeChat", "WhatsApp", "YouTube"
    ]
    Purpose_Of_Use: Literal["Education", "Entertainment", "Networking", "News"]
    Grouped_Country: Literal[
        "Australia", "Canada", "France", "Germany", "India",
        "Mexico", "Other", "Turkey", "UK", "USA"
    ]

    class Config:
        json_schema_extra = {
            "example": {
                "Study_Hours": 3.0,
                "Age": 21,
                "Avg_Daily_Usage_Hours": 4.5,
                "Daily_Unlocks": 150,
                "Physical_Activity_Hours": 2.0,
                "Sleep_Hours_Per_Night": 7.0,
                "Stress_Level": "Medium",
                "Gender": "Male",
                "Academic_Level": "Undergraduate",
                "Most_Used_Platform": "Instagram",
                "Purpose_Of_Use": "Entertainment",
                "Grouped_Country": "India"
            }
        }

class PredictionResponse(BaseModel):
    predicted_mental_health_score: float
    status: str = "success"

@app.get("/")
def home():
    return {
        "message": "Mental Health Predictor API is running",
        "model_loaded": model is not None
    }

@app.get("/features")
def get_features():
    """Returns the metadata and options for all input features to assist frontend form building."""
    return {
        "features": [
            {"name": "Study_Hours", "type": "numerical", "label": "Study Hours (per day)", "min": 0.0, "max": 24.0, "step": 0.1},
            {"name": "Age", "type": "numerical", "label": "Age", "min": 10, "max": 100, "step": 1},
            {"name": "Avg_Daily_Usage_Hours", "type": "numerical", "label": "Average Daily Usage Hours", "min": 0.0, "max": 24.0, "step": 0.1},
            {"name": "Daily_Unlocks", "type": "numerical", "label": "Daily Phone Unlocks", "min": 0, "max": 1000, "step": 1},
            {"name": "Physical_Activity_Hours", "type": "numerical", "label": "Physical Activity Hours (per day)", "min": 0.0, "max": 24.0, "step": 0.1},
            {"name": "Sleep_Hours_Per_Night", "type": "numerical", "label": "Sleep Hours Per Night", "min": 0.0, "max": 24.0, "step": 0.1},
            {"name": "Stress_Level", "type": "categorical", "label": "Stress Level", "options": ["Low", "Medium", "High", "Very High"]},
            {"name": "Gender", "type": "categorical", "label": "Gender", "options": ["Female", "Male"]},
            {"name": "Academic_Level", "type": "categorical", "label": "Academic Level", "options": ["Graduate", "High School", "Undergraduate"]},
            {"name": "Most_Used_Platform", "type": "categorical", "label": "Most Used Social Media Platform", "options": ["Facebook", "Instagram", "KakaoTalk", "LINE", "LinkedIn", "Snapchat", "TikTok", "Twitter", "VKontakte", "WeChat", "WhatsApp", "YouTube"]},
            {"name": "Purpose_Of_Use", "type": "categorical", "label": "Purpose of Use", "options": ["Education", "Entertainment", "Networking", "News"]},
            {"name": "Grouped_Country", "type": "categorical", "label": "Country", "options": ["Australia", "Canada", "France", "Germany", "India", "Mexico", "Other", "Turkey", "UK", "USA"]}
        ]
    }

@app.post("/predict", response_model=PredictionResponse)
def predict(data: AssessmentInput):
    if model is None:
        raise HTTPException(status_code=500, detail="Model is not loaded on server.")
    
    try:
        # Convert Pydantic object to dictionary
        input_dict = data.model_dump()
        
        # Order features exactly as expected by the pipeline
        ordered_features = [
            'Study_Hours',
            'Age',
            'Avg_Daily_Usage_Hours',
            'Daily_Unlocks',
            'Physical_Activity_Hours',
            'Sleep_Hours_Per_Night',
            'Stress_Level',
            'Gender',
            'Academic_Level',
            'Most_Used_Platform',
            'Purpose_Of_Use',
            'Grouped_Country'
        ]
        
        # Build single-row DataFrame
        df_input = pd.DataFrame([{col: input_dict[col] for col in ordered_features}])
        
        # Pipeline handles all preprocessing (StandardScaler, OrdinalEncoder, OneHotEncoder)
        prediction = model.predict(df_input)
        score = float(round(prediction[0], 2))
        
        return PredictionResponse(predicted_mental_health_score=score)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

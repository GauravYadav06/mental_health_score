# 🧠 AuraMind — AI-Powered Mental Health Predictor

**Understand Your Digital Habits. Discover Your Mental Wellness.**

AuraMind is a full-stack machine learning web application designed to predict a user's mental health score based on lifestyle, academic, and social media usage patterns.

By combining a trained machine learning model with a modern, interactive web interface, AuraMind provides a simple way to explore how daily habits may relate to mental well-being.

> **Disclaimer:** AuraMind is an educational machine learning project. Its predictions are statistical estimates, not medical diagnoses or substitutes for professional mental health assessments.

---

## ✨ Key Features

- **AI-Powered Predictions:** Uses a trained Random Forest Regression model to estimate mental health scores.
- **Personalized Assessment:** Collects information about digital habits, academic lifestyle, sleep, physical activity, and stress.
- **Interactive Dashboard:** Presents prediction results through a visually engaging interface.
- **Modern UI/UX:** Responsive design with glassmorphism, lavender and mint color themes, and subtle animations.
- **REST API Integration:** Connects the React frontend to a FastAPI backend for real-time predictions.
- **Input Validation:** Uses Pydantic to validate assessment data before processing.
- **Machine Learning Pipeline:** Integrates preprocessing and model inference for consistent predictions.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI |
| Machine Learning | Scikit-learn, Random Forest Regressor |
| Data Processing | Pandas, NumPy |
| Model Serialization | Joblib / Pickle |
| API Communication | REST API |
| Version Control | Git, GitHub |

---

## 🧠 Machine Learning Approach

AuraMind uses supervised machine learning to predict a continuous `Mental_Health_Score`.

### 1. Data Preprocessing

The preprocessing workflow includes:

- Handling numerical and categorical features.
- Encoding nominal categorical variables using One-Hot Encoding.
- Encoding ordinal features such as stress level.
- Applying numerical transformations where appropriate.
- Preparing the data for model training and prediction.

### 2. Model Training

A **Random Forest Regressor** is used to learn relationships between lifestyle characteristics and mental health scores.

Random Forest combines predictions from multiple decision trees, helping capture nonlinear relationships between features.

### 3. Model Integration

The trained model is saved as:

`mental_health_model.pkl`

The FastAPI backend loads the model and generates predictions from validated user inputs.

### 4. Prediction Workflow

```text
User Assessment
      |
      v
React Frontend
      |
      v
POST /predict
      |
      v
FastAPI + Pydantic Validation
      |
      v
ML Preprocessing Pipeline
      |
      v
Random Forest Regressor
      |
      v
Predicted Mental Health Score
      |
      v
Results Dashboard
```

---

## 📊 Input Features

The prediction model uses features related to:

| Category | Features |
|---|---|
| Demographics | Age, Gender, Country |
| Academic Background | Academic Level, Study Hours |
| Social Media Usage | Most Used Platform, Purpose of Use, Average Daily Usage, Daily Unlocks |
| Lifestyle | Physical Activity Hours, Sleep Hours |
| Psychological Factors | Stress Level |

The target variable, `Mental_Health_Score`, is predicted by the model and is not entered by the user.

---

## 📁 Project Structure

A simplified representation of the project:

```text
mental_health_predictor/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── main.py
│   └── mental_health_model.pkl
│
├── README.md
└── .gitignore
```

*Note: The exact structure may differ depending on where the backend files and trained model are stored.*

---

## 🚀 Getting Started

### Prerequisites

Ensure the following are installed:

- Python 3.10 or later, with compatible project dependencies
- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/GauravYadav06/mental_health_score.git
cd mental_health_score
```

### 2. Set Up the Backend

Navigate to the folder containing `main.py`:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the required Python packages:

```bash
pip install fastapi "uvicorn[standard]" scikit-learn pandas numpy joblib
```

Start the backend:

```bash
python -m uvicorn main:app --reload --port 8000
```

The backend will run at:

`http://localhost:8000`

Interactive API documentation:

`http://localhost:8000/docs`

### 3. Set Up the Frontend

Open a second terminal in the project root:

```bash
cd frontend
```

Install dependencies:

```powershell
npm.cmd install
```

Start the development server:

```powershell
npm.cmd run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

Ensure the frontend is configured to communicate with the FastAPI backend.

---

## 🔌 API Endpoint

### POST `/predict`

Accepts validated assessment data and returns a model-generated prediction.

**Example request (illustrative):**

```json
{
  "Age": 21,
  "Gender": "Male",
  "Academic_Level": "Undergraduate",
  "Most_Used_Platform": "Instagram",
  "Purpose_Of_Use": "Entertainment",
  "Avg_Daily_Usage_Hours": 4.5,
  "Daily_Unlocks": 60,
  "Study_Hours": 5,
  "Physical_Activity_Hours": 1,
  "Sleep_Hours_Per_Night": 7,
  "Stress_Level": "Medium",
  "Grouped_Country": "India"
}
```

*The example values and field names must match the categories and schema accepted by the deployed backend.*

---

## 🔮 Future Enhancements

- Model explainability using SHAP.
- Improved prediction accuracy through hyperparameter optimization.
- Personalized lifestyle insights and recommendations.
- Optional user accounts and assessment history.
- Data visualization for tracking changes over time.
- Cloud deployment for public access.
- Additional model evaluation and fairness testing.

---

## 🔒 Privacy and Responsible AI

AuraMind processes information related to lifestyle and mental well-being.

The project is intended for educational and exploratory use. Predictions may be inaccurate, and model outputs should not be interpreted as clinical assessments.

Users should avoid entering sensitive personal information unless appropriate privacy and security protections are in place.

---


GitHub: [GauravYadav06](https://github.com/GauravYadav06)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a star!

**Built with Python, Machine Learning, React, and FastAPI.**

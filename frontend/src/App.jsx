import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Results from './pages/Results';
import Insights from './pages/Insights';
import About from './pages/About';
import { INITIAL_VALUES } from './constants/features';

const API_BASE_URL = 'http://127.0.0.1:8000';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [prediction, setPrediction] = useState(null);
  const [submittedInput, setSubmittedInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState('checking'); // 'checking' | 'connected' | 'offline'

  // Probe backend status on mount
  useEffect(() => {
    const checkApi = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/`, { method: 'GET' });
        if (res.ok) {
          const data = await res.json();
          if (data.model_loaded) {
            setApiStatus('connected');
          } else {
            setApiStatus('offline');
          }
        } else {
          setApiStatus('offline');
        }
      } catch (err) {
        setApiStatus('offline');
      }
    };
    checkApi();
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAssessment = () => {
    setFormData(INITIAL_VALUES);
    setError(null);
    navigateTo('assessment');
  };

  const handleRetakeAssessment = () => {
    setFormData(INITIAL_VALUES);
    setPrediction(null);
    setSubmittedInput(null);
    setError(null);
    navigateTo('assessment');
  };

  const handleLoadPreset = (presetData) => {
    setFormData(presetData);
    navigateTo('assessment');
  };

  const handleSubmitAssessment = async (dataToSubmit) => {
    setLoading(true);
    setError(null);

    // Format payload strictly matching FastAPI AssessmentInput Pydantic schema
    const payload = {
      Study_Hours: Number(dataToSubmit.Study_Hours),
      Age: parseInt(dataToSubmit.Age, 10),
      Avg_Daily_Usage_Hours: Number(dataToSubmit.Avg_Daily_Usage_Hours),
      Daily_Unlocks: parseInt(dataToSubmit.Daily_Unlocks, 10),
      Physical_Activity_Hours: Number(dataToSubmit.Physical_Activity_Hours),
      Sleep_Hours_Per_Night: Number(dataToSubmit.Sleep_Hours_Per_Night),
      Stress_Level: dataToSubmit.Stress_Level,
      Gender: dataToSubmit.Gender,
      Academic_Level: dataToSubmit.Academic_Level,
      Most_Used_Platform: dataToSubmit.Most_Used_Platform,
      Purpose_Of_Use: dataToSubmit.Purpose_Of_Use,
      Grouped_Country: dataToSubmit.Grouped_Country,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDetail = await response.json().catch(() => ({}));
        throw new Error(
          errorDetail.detail || `Server returned error status ${response.status}`
        );
      }

      const result = await response.json();
      setPrediction(result.predicted_mental_health_score);
      setSubmittedInput(payload);
      navigateTo('results');
    } catch (err) {
      setError(
        err.message || 'Unable to connect to the prediction API. Ensure FastAPI is running on http://127.0.0.1:8000.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-surface-text font-sans antialiased selection:bg-lavender-soft selection:text-lavender-deep">
      {/* Global Glass Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        hasResults={prediction !== null}
        apiStatus={apiStatus}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Home
            onStartAssessment={handleStartAssessment}
            onLoadPreset={handleLoadPreset}
          />
        )}

        {activePage === 'assessment' && (
          <Assessment
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmitAssessment}
            loading={loading}
            error={error}
          />
        )}

        {activePage === 'results' && (
          <Results
            prediction={prediction}
            inputData={submittedInput}
            onRetakeAssessment={handleRetakeAssessment}
            onGoHome={() => navigateTo('home')}
            onGoInsights={() => navigateTo('insights')}
          />
        )}

        {activePage === 'insights' && (
          <Insights
            prediction={prediction}
            inputData={submittedInput}
            onStartAssessment={handleStartAssessment}
          />
        )}

        {activePage === 'about' && (
          <About onStartAssessment={handleStartAssessment} />
        )}
      </main>

      {/* Global Minimal Footer */}
      <Footer setActivePage={navigateTo} />
    </div>
  );
}

import React, { useState } from 'react';

const CATEGORICAL_OPTIONS = {
  Gender: ['Female', 'Male'],
  Academic_Level: ['Graduate', 'High School', 'Undergraduate'],
  Most_Used_Platform: [
    'Facebook', 'Instagram', 'KakaoTalk', 'LINE', 'LinkedIn',
    'Snapchat', 'TikTok', 'Twitter', 'VKontakte', 'WeChat', 'WhatsApp', 'YouTube'
  ],
  Purpose_Of_Use: ['Education', 'Entertainment', 'Networking', 'News'],
  Grouped_Country: [
    'Australia', 'Canada', 'France', 'Germany', 'India',
    'Mexico', 'Other', 'Turkey', 'UK', 'USA'
  ],
  Stress_Level: ['Low', 'Medium', 'High', 'Very High'],
};

const INITIAL_FORM_STATE = {
  // Numerical inputs
  Study_Hours: 3.0,
  Age: 21,
  Avg_Daily_Usage_Hours: 4.5,
  Daily_Unlocks: 150,
  Physical_Activity_Hours: 2.0,
  Sleep_Hours_Per_Night: 7.0,

  // Categorical dropdowns
  Stress_Level: 'Medium',
  Gender: 'Female',
  Academic_Level: 'Undergraduate',
  Most_Used_Platform: 'Instagram',
  Purpose_Of_Use: 'Entertainment',
  Grouped_Country: 'Other',
};

export default function AssessmentForm({ apiBaseUrl = 'http://localhost:8000' }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    // Payload ordered & typed exactly as required by the FastAPI Pydantic schema
    const payload = {
      Study_Hours: Number(formData.Study_Hours),
      Age: parseInt(formData.Age, 10),
      Avg_Daily_Usage_Hours: Number(formData.Avg_Daily_Usage_Hours),
      Daily_Unlocks: parseInt(formData.Daily_Unlocks, 10),
      Physical_Activity_Hours: Number(formData.Physical_Activity_Hours),
      Sleep_Hours_Per_Night: Number(formData.Sleep_Hours_Per_Night),
      Stress_Level: formData.Stress_Level,
      Gender: formData.Gender,
      Academic_Level: formData.Academic_Level,
      Most_Used_Platform: formData.Most_Used_Platform,
      Purpose_Of_Use: formData.Purpose_Of_Use,
      Grouped_Country: formData.Grouped_Country,
    };

    try {
      const response = await fetch(`${apiBaseUrl}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Prediction request failed');
      }

      const data = await response.json();
      setPrediction(data.predicted_mental_health_score);
    } catch (err) {
      setError(err.message || 'Network error occurred while fetching prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Mental Health Assessment</h2>
          <p style={styles.subtitle}>
            Enter lifestyle, academic, and device usage metrics to predict your Mental Health Score.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.sectionHeader}>
            <h3>Academic & Lifestyle Habits</h3>
          </div>
          <div style={styles.grid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Daily Study Hours</label>
              <input
                type="number"
                name="Study_Hours"
                value={formData.Study_Hours}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="24"
                required
                style={styles.input}
              />
              <span style={styles.hint}>e.g., 3.0 hrs/day</span>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Daily Physical Activity</label>
              <input
                type="number"
                name="Physical_Activity_Hours"
                value={formData.Physical_Activity_Hours}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="24"
                required
                style={styles.input}
              />
              <span style={styles.hint}>e.g., 2.0 hrs/day</span>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Sleep Hours Per Night</label>
              <input
                type="number"
                name="Sleep_Hours_Per_Night"
                value={formData.Sleep_Hours_Per_Night}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="24"
                required
                style={styles.input}
              />
              <span style={styles.hint}>e.g., 7.0 hrs/night</span>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Stress Level</label>
              <select
                name="Stress_Level"
                value={formData.Stress_Level}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Stress_Level.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.sectionHeader}>
            <h3>Screen Time & Device Usage</h3>
          </div>
          <div style={styles.grid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Avg Daily Usage Hours</label>
              <input
                type="number"
                name="Avg_Daily_Usage_Hours"
                value={formData.Avg_Daily_Usage_Hours}
                onChange={handleInputChange}
                step="0.1"
                min="0"
                max="24"
                required
                style={styles.input}
              />
              <span style={styles.hint}>Screen time across platforms</span>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Daily Phone Unlocks</label>
              <input
                type="number"
                name="Daily_Unlocks"
                value={formData.Daily_Unlocks}
                onChange={handleInputChange}
                step="1"
                min="0"
                max="1000"
                required
                style={styles.input}
              />
              <span style={styles.hint}>e.g., 150 unlocks</span>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Most Used Platform</label>
              <select
                name="Most_Used_Platform"
                value={formData.Most_Used_Platform}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Most_Used_Platform.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Primary Purpose of Use</label>
              <select
                name="Purpose_Of_Use"
                value={formData.Purpose_Of_Use}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Purpose_Of_Use.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.sectionHeader}>
            <h3>Demographics & Education</h3>
          </div>
          <div style={styles.grid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Age</label>
              <input
                type="number"
                name="Age"
                value={formData.Age}
                onChange={handleInputChange}
                step="1"
                min="10"
                max="100"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <select
                name="Gender"
                value={formData.Gender}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Gender.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Academic Level</label>
              <select
                name="Academic_Level"
                value={formData.Academic_Level}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Academic_Level.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Country</label>
              <select
                name="Grouped_Country"
                value={formData.Grouped_Country}
                onChange={handleInputChange}
                style={styles.select}
              >
                {CATEGORICAL_OPTIONS.Grouped_Country.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span style={styles.hint}>Top countries or "Other"</span>
            </div>
          </div>

          {error && <div style={styles.errorBox}>Error: {error}</div>}

          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Predicting Mental Health Score...' : 'Predict Mental Health Score'}
          </button>
        </form>

        {prediction !== null && (
          <div style={styles.resultBox}>
            <h3 style={styles.resultTitle}>Assessment Result</h3>
            <div style={styles.scoreCircle}>
              <span style={styles.scoreNumber}>{prediction}</span>
              <span style={styles.scoreScale}>/ 10.0</span>
            </div>
            <p style={styles.scoreDescription}>
              Predicted Mental Health Score based on your Random Forest model.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '850px',
    margin: '30px auto',
    padding: '0 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    border: '1px solid #eef0f3',
  },
  header: {
    textAlign: 'center',
    marginBottom: '28px',
  },
  title: {
    fontSize: '26px',
    fontWeight: '700',
    color: '#1a202c',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#718096',
    margin: 0,
  },
  sectionHeader: {
    borderBottom: '1px solid #edf2f7',
    paddingBottom: '8px',
    marginTop: '20px',
    marginBottom: '14px',
    color: '#2d3748',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#4a5568',
  },
  hint: {
    fontSize: '11px',
    color: '#a0aec0',
  },
  input: {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #cbd5e0',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  select: {
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #cbd5e0',
    fontSize: '14px',
    backgroundColor: '#fff',
    outline: 'none',
    cursor: 'pointer',
  },
  submitBtn: {
    marginTop: '24px',
    padding: '14px',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  errorBox: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#fff5f5',
    border: '1px solid #feb2b2',
    color: '#c53030',
    borderRadius: '8px',
    fontSize: '14px',
  },
  resultBox: {
    marginTop: '32px',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  resultTitle: {
    margin: '0 0 16px 0',
    fontSize: '18px',
    color: '#2d3748',
  },
  scoreCircle: {
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: '4px',
    backgroundColor: '#eef2ff',
    padding: '16px 28px',
    borderRadius: '50px',
    border: '2px solid #6366f1',
  },
  scoreNumber: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#4338ca',
  },
  scoreScale: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#6366f1',
  },
  scoreDescription: {
    marginTop: '12px',
    fontSize: '13px',
    color: '#64748b',
  },
};

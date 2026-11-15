import React, { useState } from 'react';
import {
  User,
  Smartphone,
  Activity,
  Heart,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  Loader2,
  BookOpen,
  Moon,
  Unlock,
  Globe,
  GraduationCap,
  Smile
} from 'lucide-react';
import { CATEGORICAL_OPTIONS, INITIAL_VALUES } from '../constants/features';

export default function Assessment({ formData, setFormData, onSubmit, loading, error }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});

  const STEPS = [
    { number: 1, title: 'About You', subtitle: 'Demographics & Education', icon: User },
    { number: 2, title: 'Digital Habits', subtitle: 'Screen Time & Unlocks', icon: Smartphone },
    { number: 3, title: 'Daily Lifestyle', subtitle: 'Rest, Study & Movement', icon: Activity },
    { number: 4, title: 'Wellbeing', subtitle: 'Perceived Stress & Review', icon: Heart },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? (value === '' ? '' : Number(value)) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));

    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Step-level validation
  const validateStep = (step) => {
    const errors = {};
    if (step === 1) {
      if (formData.Age === '' || formData.Age < 10 || formData.Age > 100) {
        errors.Age = 'Please enter a valid age between 10 and 100.';
      }
    } else if (step === 2) {
      if (formData.Avg_Daily_Usage_Hours === '' || formData.Avg_Daily_Usage_Hours < 0 || formData.Avg_Daily_Usage_Hours > 24) {
        errors.Avg_Daily_Usage_Hours = 'Daily usage hours must be between 0.0 and 24.0.';
      }
      if (formData.Daily_Unlocks === '' || formData.Daily_Unlocks < 0 || formData.Daily_Unlocks > 1000) {
        errors.Daily_Unlocks = 'Daily unlocks must be between 0 and 1000.';
      }
    } else if (step === 3) {
      if (formData.Study_Hours === '' || formData.Study_Hours < 0 || formData.Study_Hours > 24) {
        errors.Study_Hours = 'Study hours must be between 0.0 and 24.0.';
      }
      if (formData.Physical_Activity_Hours === '' || formData.Physical_Activity_Hours < 0 || formData.Physical_Activity_Hours > 24) {
        errors.Physical_Activity_Hours = 'Physical activity hours must be between 0.0 and 24.0.';
      }
      if (formData.Sleep_Hours_Per_Night === '' || formData.Sleep_Hours_Per_Night < 0 || formData.Sleep_Hours_Per_Night > 24) {
        errors.Sleep_Hours_Per_Night = 'Sleep hours must be between 0.0 and 24.0.';
      }
    }
    return errors;
  };

  const handleNext = () => {
    const errors = validateStep(currentStep);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3),
    };

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      // jump back to first step containing error
      if (errors.Age) setCurrentStep(1);
      else if (errors.Avg_Daily_Usage_Hours || errors.Daily_Unlocks) setCurrentStep(2);
      else if (errors.Study_Hours || errors.Physical_Activity_Hours || errors.Sleep_Hours_Per_Night) setCurrentStep(3);
      return;
    }

    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_VALUES);
    setValidationErrors({});
    setCurrentStep(1);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Title & Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-xs font-semibold text-lavender-deep">
          <Sparkles className="w-3.5 h-3.5 text-lavender-primary" />
          <span>AuraMind Assessment Wizard</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
          Mind & Habits Assessment
        </h1>
        <p className="text-xs sm:text-sm text-surface-muted max-w-md mx-auto">
          Complete the 4 focused steps to evaluate your daily behavioral metrics with our trained ML pipeline.
        </p>
      </div>

      {/* Horizontal Stepper Progress Indicator */}
      <div className="glass-card p-4 sm:p-5">
        <div className="grid grid-cols-4 gap-2 relative">
          {STEPS.map((s) => {
            const isCompleted = currentStep > s.number;
            const isCurrent = currentStep === s.number;
            const Icon = s.icon;

            return (
              <button
                key={s.number}
                type="button"
                onClick={() => {
                  if (currentStep > s.number) {
                    setCurrentStep(s.number);
                  }
                }}
                disabled={currentStep < s.number}
                className={`flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-200 ${
                  isCurrent
                    ? 'bg-lavender-soft text-lavender-deep font-bold shadow-2xs'
                    : isCompleted
                    ? 'text-surface-text hover:bg-white cursor-pointer'
                    : 'text-surface-muted/60 opacity-60 cursor-not-allowed'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs mb-1.5 transition-all ${
                    isCurrent
                      ? 'bg-gradient-to-r from-lavender-primary to-lavender-deep text-white shadow-soft'
                      : isCompleted
                      ? 'bg-mint-soft text-mint-deep border border-mint-200'
                      : 'bg-surface-bg text-surface-muted border border-surface-border'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span className="text-[11px] font-heading font-semibold leading-tight line-clamp-1">
                  {s.title}
                </span>
                <span className="text-[9px] text-surface-muted hidden sm:block">
                  Step 0{s.number}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Glassmorphism Form Card */}
      <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 space-y-8">
        {/* Step Header */}
        <div className="flex items-center justify-between pb-5 border-b border-surface-border">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-deep">
              Step 0{currentStep} of 04
            </span>
            <h2 className="text-2xl font-heading font-bold text-surface-text mt-0.5">
              {STEPS[currentStep - 1].title}
            </h2>
            <p className="text-xs text-surface-muted mt-0.5">
              {STEPS[currentStep - 1].subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-surface-muted hover:text-surface-text flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg hover:bg-surface-bg"
            title="Reset to default values"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* STEP 1: About You */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Age */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span>Age</span>
                  <span className="text-[10px] text-surface-muted font-normal">10 – 100 years</span>
                </label>
                <input
                  type="number"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  min="10"
                  max="100"
                  step="1"
                  required
                  placeholder="e.g. 21"
                  className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    validationErrors.Age
                      ? 'border-rose-300 focus:ring-rose-100'
                      : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                  }`}
                />
                {validationErrors.Age && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Age}</p>
                )}
              </div>

              {/* Gender */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text">
                  Gender Identity
                </label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-lavender-primary focus:ring-2 focus:ring-lavender-soft focus:outline-none cursor-pointer"
                >
                  {CATEGORICAL_OPTIONS.Gender.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* Academic Level */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-lavender-primary" />
                  Academic Level
                </label>
                <select
                  name="Academic_Level"
                  value={formData.Academic_Level}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-lavender-primary focus:ring-2 focus:ring-lavender-soft focus:outline-none cursor-pointer"
                >
                  {CATEGORICAL_OPTIONS.Academic_Level.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grouped Country */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-mint-deep" />
                    Country Cluster
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">Model Grouped</span>
                </label>
                <select
                  name="Grouped_Country"
                  value={formData.Grouped_Country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-lavender-primary focus:ring-2 focus:ring-lavender-soft focus:outline-none cursor-pointer"
                >
                  {CATEGORICAL_OPTIONS.Grouped_Country.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-surface-muted">
                  Top 9 training regions or "Other" for remaining global locations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Digital Habits */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Avg Daily Usage Hours */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-mint-deep" />
                    Daily Screen Usage
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">0.0 – 24.0 hrs</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="Avg_Daily_Usage_Hours"
                    value={formData.Avg_Daily_Usage_Hours}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.1"
                    required
                    placeholder="e.g. 4.2"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.Avg_Daily_Usage_Hours
                        ? 'border-rose-300 focus:ring-rose-100'
                        : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                    }`}
                  />
                  <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                </div>
                {validationErrors.Avg_Daily_Usage_Hours && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Avg_Daily_Usage_Hours}</p>
                )}
              </div>

              {/* Daily Phone Unlocks */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Unlock className="w-3.5 h-3.5 text-mint-deep" />
                    Daily Phone Unlocks
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">0 – 1000 unlocks</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="Daily_Unlocks"
                    value={formData.Daily_Unlocks}
                    onChange={handleChange}
                    min="0"
                    max="1000"
                    step="1"
                    required
                    placeholder="e.g. 140"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.Daily_Unlocks
                        ? 'border-rose-300 focus:ring-rose-100'
                        : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                    }`}
                  />
                  <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">times</span>
                </div>
                {validationErrors.Daily_Unlocks && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Daily_Unlocks}</p>
                )}
              </div>

              {/* Most Used Platform */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text">
                  Most Used Social Platform
                </label>
                <select
                  name="Most_Used_Platform"
                  value={formData.Most_Used_Platform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-mint-deep focus:ring-2 focus:ring-mint-soft focus:outline-none cursor-pointer"
                >
                  {CATEGORICAL_OPTIONS.Most_Used_Platform.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Purpose of Use */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text">
                  Primary Usage Intent
                </label>
                <select
                  name="Purpose_Of_Use"
                  value={formData.Purpose_Of_Use}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-mint-deep focus:ring-2 focus:ring-mint-soft focus:outline-none cursor-pointer"
                >
                  {CATEGORICAL_OPTIONS.Purpose_Of_Use.map((purp) => (
                    <option key={purp} value={purp}>
                      {purp}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Daily Lifestyle */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Study Hours */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-lavender-primary" />
                    Daily Study Hours
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">0.0 – 24.0 hrs</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="Study_Hours"
                    value={formData.Study_Hours}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.1"
                    required
                    placeholder="e.g. 3.5"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.Study_Hours
                        ? 'border-rose-300 focus:ring-rose-100'
                        : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                    }`}
                  />
                  <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                </div>
                {validationErrors.Study_Hours && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Study_Hours}</p>
                )}
              </div>

              {/* Physical Activity Hours */}
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-lavender-primary" />
                    Physical Activity Hours
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">0.0 – 24.0 hrs</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="Physical_Activity_Hours"
                    value={formData.Physical_Activity_Hours}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.1"
                    required
                    placeholder="e.g. 1.8"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.Physical_Activity_Hours
                        ? 'border-rose-300 focus:ring-rose-100'
                        : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                    }`}
                  />
                  <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                </div>
                {validationErrors.Physical_Activity_Hours && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Physical_Activity_Hours}</p>
                )}
              </div>

              {/* Sleep Hours Per Night */}
              <div className="space-y-1.5 text-left sm:col-span-2">
                <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5 text-lavender-primary" />
                    Sleep Hours Per Night
                  </span>
                  <span className="text-[10px] text-surface-muted font-normal">0.0 – 24.0 hrs</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="Sleep_Hours_Per_Night"
                    value={formData.Sleep_Hours_Per_Night}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.1"
                    required
                    placeholder="e.g. 7.5"
                    className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      validationErrors.Sleep_Hours_Per_Night
                        ? 'border-rose-300 focus:ring-rose-100'
                        : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                    }`}
                  />
                  <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/night</span>
                </div>
                {validationErrors.Sleep_Hours_Per_Night && (
                  <p className="text-[11px] text-rose-500">{validationErrors.Sleep_Hours_Per_Night}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Wellbeing & Summary Review */}
        {currentStep === 4 && (
          <div className="space-y-6">
            {/* Stress Level */}
            <div className="space-y-2 text-left">
              <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Smile className="w-3.5 h-3.5 text-lavender-primary" />
                  Perceived Daily Stress Level
                </span>
                <span className="text-[10px] text-surface-muted font-normal">Ordinal Classification</span>
              </label>
              <select
                name="Stress_Level"
                value={formData.Stress_Level}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-surface-border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:border-lavender-primary focus:ring-2 focus:ring-lavender-soft focus:outline-none cursor-pointer"
              >
                {CATEGORICAL_OPTIONS.Stress_Level.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Assessment Input Confirmation Card */}
            <div className="p-5 rounded-2xl bg-surface-bg border border-surface-border text-left space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                <span className="text-xs font-heading font-bold text-surface-text">
                  Review Your 12 Evaluation Parameters
                </span>
                <span className="text-[10px] text-mint-deep bg-mint-soft px-2 py-0.5 rounded-full font-semibold">
                  Valid Schema
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-surface-muted">
                <div>Age: <strong className="text-surface-text font-mono">{formData.Age}</strong></div>
                <div>Gender: <strong className="text-surface-text">{formData.Gender}</strong></div>
                <div>Level: <strong className="text-surface-text">{formData.Academic_Level}</strong></div>
                <div>Country: <strong className="text-surface-text">{formData.Grouped_Country}</strong></div>
                <div>Platform: <strong className="text-surface-text">{formData.Most_Used_Platform}</strong></div>
                <div>Purpose: <strong className="text-surface-text">{formData.Purpose_Of_Use}</strong></div>
                <div>Screen Time: <strong className="text-surface-text font-mono">{formData.Avg_Daily_Usage_Hours}h</strong></div>
                <div>Unlocks: <strong className="text-surface-text font-mono">{formData.Daily_Unlocks}</strong></div>
                <div>Study Hours: <strong className="text-surface-text font-mono">{formData.Study_Hours}h</strong></div>
                <div>Activity: <strong className="text-surface-text font-mono">{formData.Physical_Activity_Hours}h</strong></div>
                <div>Sleep: <strong className="text-surface-text font-mono">{formData.Sleep_Hours_Per_Night}h</strong></div>
                <div>Stress: <strong className="text-surface-text">{formData.Stress_Level}</strong></div>
              </div>
            </div>
          </div>
        )}

        {/* API Error Box */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-left flex items-start gap-3 shadow-2xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
            <div>
              <h4 className="font-semibold text-rose-800">Connection Error</h4>
              <p className="mt-0.5">{error}</p>
              <p className="mt-1 text-[10px] text-rose-600">
                Verify that your FastAPI backend is running on <code>http://127.0.0.1:8000</code>.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons (Back, Continue, Generate Insights) */}
        <div className="pt-4 flex items-center justify-between gap-3 border-t border-surface-border">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={loading}
              className="btn-secondary px-5 py-3 flex items-center gap-1.5 text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary px-6 py-3 flex items-center gap-1.5 text-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary px-7 py-3.5 flex items-center gap-2 text-sm shadow-glow-lavender"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing your assessment...</span>
                </>
              ) : (
                <>
                  <span>Generate My Insights</span>
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

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
  Smile,
  ShieldCheck,
  Layers,
  Box,
  Compass
} from 'lucide-react';
import { CATEGORICAL_OPTIONS, INITIAL_VALUES } from '../constants/features';
import AssessmentOrbitalSculpture from '../components/AssessmentOrbitalSculpture';

export default function Assessment({ formData, setFormData, onSubmit, loading, error }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});

  const STEPS = [
    {
      number: 1,
      title: 'About You',
      subtitle: 'Demographics & Education',
      icon: User,
      guideTitle: 'Demographic Baseline',
      guideDesc: 'Factors like academic level, age, and country cluster establish contextual baseline variance in the Random Forest model.',
      featuresConfigured: '4 features'
    },
    {
      number: 2,
      title: 'Digital Habits',
      subtitle: 'Screen Time & Unlocks',
      icon: Smartphone,
      guideTitle: 'Digital Saturation',
      guideDesc: 'Daily screen hours and unlock frequencies measure continuous attention fragmentation and digital cognitive exposure.',
      featuresConfigured: '4 features'
    },
    {
      number: 3,
      title: 'Daily Lifestyle',
      subtitle: 'Rest, Study & Movement',
      icon: Activity,
      guideTitle: 'Restorative Buffers',
      guideDesc: 'Adequate nocturnal rest, active physical movement, and dedicated study provide biological buffers against daily cognitive fatigue.',
      featuresConfigured: '3 features'
    },
    {
      number: 4,
      title: 'Lifestyle & Wellbeing',
      subtitle: 'Stress Level & Review',
      icon: Heart,
      guideTitle: 'Perceived Equilibrium',
      guideDesc: 'Subjective stress perception completes your 12-dimensional behavioral profile, ready for immediate machine learning inference.',
      featuresConfigured: '1 final feature'
    },
  ];

  // 4 Selectable Stress Level Options
  const STRESS_OPTIONS = [
    {
      value: 'Low',
      label: 'Low Stress',
      badge: '1',
      desc: 'Calm, balanced daily routine with minimal tension.',
      tone: 'border-mint-200 hover:border-mint-400 bg-mint-50/40'
    },
    {
      value: 'Medium',
      label: 'Moderate Stress',
      badge: '2',
      desc: 'Manageable daily academic and personal demands.',
      tone: 'border-lavender-200 hover:border-lavender-400 bg-lavender-50/40'
    },
    {
      value: 'High',
      label: 'High Stress',
      badge: '3',
      desc: 'Frequent cognitive tension and demanding task load.',
      tone: 'border-amber-200 hover:border-amber-400 bg-amber-50/40'
    },
    {
      value: 'Very High',
      label: 'Very High Stress',
      badge: '4',
      desc: 'Intense persistent pressure and mental exhaustion.',
      tone: 'border-rose-200 hover:border-rose-400 bg-rose-50/40'
    },
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

  const handleStressSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      Stress_Level: value,
    }));

    if (validationErrors.Stress_Level) {
      setValidationErrors((prev) => {
        const next = { ...prev };
        delete next.Stress_Level;
        return next;
      });
    }
  };

  // Comprehensive Step-level validation
  const validateStep = (step) => {
    const errors = {};
    if (step === 1) {
      if (formData.Age === '' || formData.Age === null || formData.Age === undefined) {
        errors.Age = 'Please enter your age.';
      } else if (Number(formData.Age) < 10 || Number(formData.Age) > 100) {
        errors.Age = 'Please enter a valid age between 10 and 100.';
      }

      if (!formData.Gender || formData.Gender === '') {
        errors.Gender = 'Please select your gender identity.';
      }

      if (!formData.Academic_Level || formData.Academic_Level === '') {
        errors.Academic_Level = 'Please select your academic level.';
      }

      if (!formData.Grouped_Country || formData.Grouped_Country === '') {
        errors.Grouped_Country = 'Please select your country cluster.';
      }
    } else if (step === 2) {
      if (formData.Avg_Daily_Usage_Hours === '' || formData.Avg_Daily_Usage_Hours === null || formData.Avg_Daily_Usage_Hours === undefined) {
        errors.Avg_Daily_Usage_Hours = 'Please enter your daily screen usage hours.';
      } else if (Number(formData.Avg_Daily_Usage_Hours) < 0 || Number(formData.Avg_Daily_Usage_Hours) > 24) {
        errors.Avg_Daily_Usage_Hours = 'Daily usage hours must be between 0.0 and 24.0.';
      }

      if (formData.Daily_Unlocks === '' || formData.Daily_Unlocks === null || formData.Daily_Unlocks === undefined) {
        errors.Daily_Unlocks = 'Please enter your estimated daily phone unlocks.';
      } else if (Number(formData.Daily_Unlocks) < 0 || Number(formData.Daily_Unlocks) > 1000) {
        errors.Daily_Unlocks = 'Daily unlocks must be between 0 and 1000.';
      }

      if (!formData.Most_Used_Platform || formData.Most_Used_Platform === '') {
        errors.Most_Used_Platform = 'Please select your most used social platform.';
      }

      if (!formData.Purpose_Of_Use || formData.Purpose_Of_Use === '') {
        errors.Purpose_Of_Use = 'Please select your primary usage intent.';
      }
    } else if (step === 3) {
      if (formData.Study_Hours === '' || formData.Study_Hours === null || formData.Study_Hours === undefined) {
        errors.Study_Hours = 'Please enter your daily study hours.';
      } else if (Number(formData.Study_Hours) < 0 || Number(formData.Study_Hours) > 24) {
        errors.Study_Hours = 'Study hours must be between 0.0 and 24.0.';
      }

      if (formData.Physical_Activity_Hours === '' || formData.Physical_Activity_Hours === null || formData.Physical_Activity_Hours === undefined) {
        errors.Physical_Activity_Hours = 'Please enter your daily physical activity hours.';
      } else if (Number(formData.Physical_Activity_Hours) < 0 || Number(formData.Physical_Activity_Hours) > 24) {
        errors.Physical_Activity_Hours = 'Physical activity hours must be between 0.0 and 24.0.';
      }

      if (formData.Sleep_Hours_Per_Night === '' || formData.Sleep_Hours_Per_Night === null || formData.Sleep_Hours_Per_Night === undefined) {
        errors.Sleep_Hours_Per_Night = 'Please enter your sleep hours per night.';
      } else if (Number(formData.Sleep_Hours_Per_Night) < 0 || Number(formData.Sleep_Hours_Per_Night) > 24) {
        errors.Sleep_Hours_Per_Night = 'Sleep hours must be between 0.0 and 24.0.';
      }
    } else if (step === 4) {
      if (!formData.Stress_Level || !['Low', 'Medium', 'High', 'Very High'].includes(formData.Stress_Level)) {
        errors.Stress_Level = 'Please select your perceived stress level (Low, Medium, High, or Very High).';
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
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3),
      ...validateStep(4),
    };

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      if (errors.Age || errors.Gender || errors.Academic_Level || errors.Grouped_Country) setCurrentStep(1);
      else if (errors.Avg_Daily_Usage_Hours || errors.Daily_Unlocks || errors.Most_Used_Platform || errors.Purpose_Of_Use) setCurrentStep(2);
      else if (errors.Study_Hours || errors.Physical_Activity_Hours || errors.Sleep_Hours_Per_Night) setCurrentStep(3);
      else if (errors.Stress_Level) setCurrentStep(4);
      return;
    }

    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData(INITIAL_VALUES);
    setValidationErrors({});
    setCurrentStep(1);
  };

  // Calculate completed features count
  const completedCount = Object.keys(formData).reduce((acc, key) => {
    const val = formData[key];
    return val !== '' && val !== null && val !== undefined ? acc + 1 : acc;
  }, 0);

  const currentStepData = STEPS[currentStep - 1];
  const StepIcon = currentStepData.icon;

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-140px)] py-8 sm:py-12">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-10 right-1/4 w-[450px] h-[450px] bg-lavender-primary/10 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-mint-accent/15 rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Title & Header Section */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill text-xs font-semibold text-lavender-deep shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-lavender-primary animate-pulse" />
            <span>Interactive Assessment Wizard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
            Mind & Daily Habits Assessment
          </h1>
          <p className="text-xs sm:text-sm text-surface-muted max-w-md mx-auto leading-relaxed">
            Provide your 12 daily behavioral factors. Every field starts empty for your authentic input.
          </p>
        </div>

        {/* Multi-Step Progress Stepper */}
        <div className="glass-card p-4 sm:p-5 relative overflow-hidden shadow-soft border-white/90">
          {/* Animated Connecting Progress Bar */}
          <div className="absolute top-7 left-12 right-12 h-1 bg-surface-border/80 rounded-full hidden sm:block -z-0">
            <div
              className="h-full rounded-full bg-gradient-to-r from-lavender-primary via-lavender-deep to-mint-accent transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-2 relative z-10">
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
                  className={`flex flex-col items-center text-center p-2 rounded-2xl transition-all duration-300 relative ${
                    isCurrent
                      ? 'bg-lavender-soft/80 text-lavender-deep font-bold shadow-2xs ring-1 ring-lavender-300/60'
                      : isCompleted
                      ? 'text-surface-text hover:bg-white/80 cursor-pointer'
                      : 'text-surface-muted/60 opacity-60 cursor-not-allowed'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs mb-1.5 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-lavender-primary to-lavender-deep text-white shadow-soft scale-105'
                        : isCompleted
                        ? 'bg-mint-soft text-mint-deep border border-mint-200'
                        : 'bg-surface-bg text-surface-muted border border-surface-border'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-mint-deep" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-[11px] font-heading font-semibold leading-tight line-clamp-1">
                    {s.title}
                  </span>
                  <span className="text-[9px] text-surface-muted hidden sm:block mt-0.5">
                    {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : `Step 0${s.number}`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Form on Left, 3D Sculpture on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Glassmorphism Form Container */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 space-y-7 relative z-10 shadow-soft border-white/90">
              {/* Step Subheader */}
              <div className="flex items-center justify-between pb-5 border-b border-surface-border">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-deep bg-lavender-soft/80 px-2.5 py-0.5 rounded-full border border-lavender-200/60">
                    Step 0{currentStep} of 04
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-surface-text mt-1.5">
                    {currentStepData.title}
                  </h2>
                  <p className="text-xs text-surface-muted mt-0.5">
                    {currentStepData.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-surface-muted hover:text-surface-text flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-xl hover:bg-surface-bg border border-transparent hover:border-surface-border"
                  title="Clear all fields"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset Form</span>
                </button>
              </div>

              {/* STEP 1: About You */}
              {currentStep === 1 && (
                <div key="step-1" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Age */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span>Age in Years <span className="text-rose-500 font-bold">*</span></span>
                        <span className="text-[10px] text-surface-muted font-normal">10 – 100</span>
                      </label>
                      <input
                        type="number"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        min="10"
                        max="100"
                        step="1"
                        placeholder="e.g. 21"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          validationErrors.Age
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                        }`}
                      />
                      {validationErrors.Age && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Age}</span>
                        </p>
                      )}
                    </div>

                    {/* Gender */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text">
                        Gender Identity <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <select
                        name="Gender"
                        value={formData.Gender}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 cursor-pointer transition-all ${
                          validationErrors.Gender
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                        }`}
                      >
                        <option value="" disabled>Select your gender</option>
                        {CATEGORICAL_OPTIONS.Gender.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {validationErrors.Gender && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Gender}</span>
                        </p>
                      )}
                    </div>

                    {/* Academic Level */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-lavender-primary" />
                        <span>Academic Level <span className="text-rose-500 font-bold">*</span></span>
                      </label>
                      <select
                        name="Academic_Level"
                        value={formData.Academic_Level}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 cursor-pointer transition-all ${
                          validationErrors.Academic_Level
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                        }`}
                      >
                        <option value="" disabled>Select academic level</option>
                        {CATEGORICAL_OPTIONS.Academic_Level.map((lvl) => (
                          <option key={lvl} value={lvl}>
                            {lvl}
                          </option>
                        ))}
                      </select>
                      {validationErrors.Academic_Level && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Academic_Level}</span>
                        </p>
                      )}
                    </div>

                    {/* Grouped Country */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-mint-deep" />
                          <span>Country Cluster <span className="text-rose-500 font-bold">*</span></span>
                        </span>
                        <span className="text-[10px] text-surface-muted font-normal">Model Grouped</span>
                      </label>
                      <select
                        name="Grouped_Country"
                        value={formData.Grouped_Country}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 cursor-pointer transition-all ${
                          validationErrors.Grouped_Country
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                        }`}
                      >
                        <option value="" disabled>Select country cluster</option>
                        {CATEGORICAL_OPTIONS.Grouped_Country.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {validationErrors.Grouped_Country ? (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Grouped_Country}</span>
                        </p>
                      ) : (
                        <p className="text-[10px] text-surface-muted">
                          Top 9 training regions or "Other" for remaining global locations.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Digital Habits */}
              {currentStep === 2 && (
                <div key="step-2" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Avg Daily Usage Hours */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-mint-deep" />
                          <span>Daily Social Media Usage <span className="text-rose-500 font-bold">*</span></span>
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
                          placeholder="e.g. 4.5"
                          className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.Avg_Daily_Usage_Hours
                              ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                              : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                          }`}
                        />
                        <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                      </div>
                      {validationErrors.Avg_Daily_Usage_Hours && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Avg_Daily_Usage_Hours}</span>
                        </p>
                      )}
                    </div>

                    {/* Daily Phone Unlocks */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Unlock className="w-3.5 h-3.5 text-mint-deep" />
                          <span>Daily Phone Unlocks <span className="text-rose-500 font-bold">*</span></span>
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
                          placeholder="e.g. 60"
                          className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.Daily_Unlocks
                              ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                              : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                          }`}
                        />
                        <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">times</span>
                      </div>
                      {validationErrors.Daily_Unlocks && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Daily_Unlocks}</span>
                        </p>
                      )}
                    </div>

                    {/* Most Used Platform */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text">
                        Most Used Social Platform <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <select
                        name="Most_Used_Platform"
                        value={formData.Most_Used_Platform}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 cursor-pointer transition-all ${
                          validationErrors.Most_Used_Platform
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                        }`}
                      >
                        <option value="" disabled>Select your platform</option>
                        {CATEGORICAL_OPTIONS.Most_Used_Platform.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {validationErrors.Most_Used_Platform && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Most_Used_Platform}</span>
                        </p>
                      )}
                    </div>

                    {/* Purpose of Use */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text">
                        Primary Usage Intent <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <select
                        name="Purpose_Of_Use"
                        value={formData.Purpose_Of_Use}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 cursor-pointer transition-all ${
                          validationErrors.Purpose_Of_Use
                            ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                            : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                        }`}
                      >
                        <option value="" disabled>Select primary purpose</option>
                        {CATEGORICAL_OPTIONS.Purpose_Of_Use.map((purp) => (
                          <option key={purp} value={purp}>
                            {purp}
                          </option>
                        ))}
                      </select>
                      {validationErrors.Purpose_Of_Use && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Purpose_Of_Use}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Daily Lifestyle */}
              {currentStep === 3 && (
                <div key="step-3" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Study Hours */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-lavender-primary" />
                          <span>Daily Study Hours <span className="text-rose-500 font-bold">*</span></span>
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
                          placeholder="e.g. 5"
                          className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.Study_Hours
                              ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                              : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                          }`}
                        />
                        <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                      </div>
                      {validationErrors.Study_Hours && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Study_Hours}</span>
                        </p>
                      )}
                    </div>

                    {/* Physical Activity Hours */}
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-mint-deep" />
                          <span>Physical Activity Hours <span className="text-rose-500 font-bold">*</span></span>
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
                          placeholder="e.g. 1"
                          className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.Physical_Activity_Hours
                              ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                              : 'border-surface-border focus:border-mint-deep focus:ring-mint-soft'
                          }`}
                        />
                        <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/day</span>
                      </div>
                      {validationErrors.Physical_Activity_Hours && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Physical_Activity_Hours}</span>
                        </p>
                      )}
                    </div>

                    {/* Sleep Hours Per Night */}
                    <div className="space-y-1.5 text-left sm:col-span-2">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Moon className="w-3.5 h-3.5 text-lavender-primary" />
                          <span>Sleep Hours Per Night <span className="text-rose-500 font-bold">*</span></span>
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
                          placeholder="e.g. 7.5"
                          className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium text-surface-text bg-white/70 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            validationErrors.Sleep_Hours_Per_Night
                              ? 'border-rose-300 focus:ring-rose-100 ring-1 ring-rose-300'
                              : 'border-surface-border focus:border-lavender-primary focus:ring-lavender-soft'
                          }`}
                        />
                        <span className="absolute right-4 top-3 text-xs text-surface-muted font-medium">hrs/night</span>
                      </div>
                      {validationErrors.Sleep_Hours_Per_Night && (
                        <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{validationErrors.Sleep_Hours_Per_Night}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Lifestyle & Wellbeing (Stress_Level Interactive Selection & Review) */}
              {currentStep === 4 && (
                <div key="step-4" className="space-y-7 animate-fade-in">
                  {/* Interactive Stress Level 4-Card Selector */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-heading font-semibold text-surface-text flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-lavender-primary" />
                        <span>Perceived Daily Stress Level</span>
                        <span className="text-rose-500 font-bold">*</span>
                      </label>
                      <span className="text-[10px] text-surface-muted font-mono font-medium">
                        Feature 12 of 12 (Required)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {STRESS_OPTIONS.map((opt) => {
                        const isSelected = formData.Stress_Level === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => handleStressSelect(opt.value)}
                            className={`p-4 rounded-2xl border text-left transition-all duration-200 relative group cursor-pointer ${
                              isSelected
                                ? 'bg-lavender-soft/90 border-lavender-primary shadow-soft ring-2 ring-lavender-primary/30'
                                : `bg-white/80 hover:bg-white border-surface-border hover:border-lavender-300/70 shadow-2xs ${opt.tone}`
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-heading font-bold transition-colors ${
                                    isSelected
                                      ? 'bg-lavender-primary text-white shadow-xs'
                                      : 'bg-surface-bg text-surface-muted group-hover:text-surface-text'
                                  }`}
                                >
                                  {opt.badge}
                                </div>
                                <div>
                                  <h4 className="text-sm font-heading font-bold text-surface-text">
                                    {opt.label}
                                  </h4>
                                  <p className="text-[11px] text-surface-muted leading-relaxed mt-0.5">
                                    {opt.desc}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                                  isSelected
                                    ? 'border-lavender-primary bg-lavender-primary'
                                    : 'border-surface-border group-hover:border-lavender-300'
                                }`}
                              >
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {validationErrors.Stress_Level && (
                      <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{validationErrors.Stress_Level}</span>
                      </p>
                    )}
                  </div>

                  {/* Assessment Input Confirmation Card */}
                  <div className="p-5 rounded-2xl bg-surface-bg/80 border border-surface-border text-left space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                      <span className="text-xs font-heading font-bold text-surface-text flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-mint-deep" />
                        <span>Review All 12 Parameters Submitted to ML Model</span>
                      </span>
                      <span className="text-[10px] text-mint-deep bg-mint-soft px-2.5 py-0.5 rounded-full font-semibold border border-mint-200">
                        {formData.Stress_Level ? '12/12 Complete' : `${completedCount}/12 Provided`}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-surface-muted">
                      <div>Age: <strong className="text-surface-text font-mono">{formData.Age || '—'}</strong></div>
                      <div>Gender: <strong className="text-surface-text">{formData.Gender || '—'}</strong></div>
                      <div>Level: <strong className="text-surface-text">{formData.Academic_Level || '—'}</strong></div>
                      <div>Country: <strong className="text-surface-text">{formData.Grouped_Country || '—'}</strong></div>
                      <div>Platform: <strong className="text-surface-text">{formData.Most_Used_Platform || '—'}</strong></div>
                      <div>Purpose: <strong className="text-surface-text">{formData.Purpose_Of_Use || '—'}</strong></div>
                      <div>Screen Time: <strong className="text-surface-text font-mono">{formData.Avg_Daily_Usage_Hours ? `${formData.Avg_Daily_Usage_Hours}h` : '—'}</strong></div>
                      <div>Unlocks: <strong className="text-surface-text font-mono">{formData.Daily_Unlocks || '—'}</strong></div>
                      <div>Study Hours: <strong className="text-surface-text font-mono">{formData.Study_Hours ? `${formData.Study_Hours}h` : '—'}</strong></div>
                      <div>Activity: <strong className="text-surface-text font-mono">{formData.Physical_Activity_Hours ? `${formData.Physical_Activity_Hours}h` : '—'}</strong></div>
                      <div>Sleep: <strong className="text-surface-text font-mono">{formData.Sleep_Hours_Per_Night ? `${formData.Sleep_Hours_Per_Night}h` : '—'}</strong></div>
                      <div>Stress Level: {formData.Stress_Level ? (
                        <strong className="text-lavender-deep font-bold">{formData.Stress_Level}</strong>
                      ) : (
                        <span className="text-rose-500 font-semibold italic">Not selected</span>
                      )}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Error Alert */}
              {error && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-left flex items-start gap-3 shadow-2xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-500" />
                  <div>
                    <h4 className="font-semibold text-rose-800">Connection Error</h4>
                    <p className="mt-0.5">{error}</p>
                    <p className="mt-1 text-[10px] text-rose-600">
                      Verify that your FastAPI backend is running on <code>https://mental-health-score-k9li.onrender.com</code>.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Action Buttons */}
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
                    className="btn-primary px-7 py-3.5 flex items-center gap-2 text-xs shadow-glow-lavender hover:scale-[1.01] transition-transform"
                  >
                    <span>Continue to Step 0{currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary px-8 py-4 flex items-center gap-2.5 text-sm shadow-glow-lavender hover:scale-[1.01] transition-transform"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Evaluating 12 Features with ML Model...</span>
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

          {/* Right Column (Desktop Only): Dedicated 3D Orbital Sculpture Panel */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col space-y-5 sticky top-28">
            {/* Visual 3D Orbital Sculpture Stage Card */}
            <div className="glass-card p-6 relative overflow-hidden flex flex-col items-center text-center shadow-soft border-white/90">
              {/* Radial Lavender Background Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-lavender-primary/25 via-white/70 to-mint-soft blur-2xl opacity-90 -z-0" />

              {/* 3D Large Orbital Armillary Sculpture */}
              <div className="relative z-10 w-full flex items-center justify-center my-1">
                <AssessmentOrbitalSculpture />
              </div>

              {/* Dynamic Context Card for the Active Step */}
              <div className="relative z-10 w-full text-left space-y-2 p-4 rounded-2xl bg-white/80 border border-surface-border shadow-xs backdrop-blur-sm">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-lavender-deep uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <StepIcon className="w-3.5 h-3.5 text-lavender-primary" />
                    <span>{currentStepData.guideTitle}</span>
                  </span>
                  <span className="text-mint-deep bg-mint-soft px-2.5 py-0.5 rounded-full font-semibold border border-mint-200">
                    {currentStepData.featuresConfigured}
                  </span>
                </div>
                <p className="text-xs text-surface-muted leading-relaxed">
                  {currentStepData.guideDesc}
                </p>
              </div>

              {/* Live Readiness Counter Bar */}
              <div className="relative z-10 w-full pt-3 mt-1 border-t border-surface-border/60 text-left space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="font-semibold text-surface-text flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-lavender-primary" />
                    <span>Model Input Vector</span>
                  </span>
                  <span className="font-mono text-lavender-deep font-bold">
                    {completedCount} of 12 Configured
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-surface-bg border border-surface-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lavender-primary via-lavender-deep to-mint-accent transition-all duration-500 ease-out"
                    style={{ width: `${(completedCount / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Helper Tip Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-lavender-soft/60 to-mint-soft/60 border border-surface-border text-left space-y-1 shadow-2xs">
              <span className="text-[11px] font-heading font-bold text-surface-text flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-lavender-primary" />
                <span>Deterministic ML Evaluation</span>
              </span>
              <p className="text-[11px] text-surface-muted leading-relaxed">
                All 12 inputs are fed directly into the trained Scikit-Learn pipeline without mock formulas or randomized fallbacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


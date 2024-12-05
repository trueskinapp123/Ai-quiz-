import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { QuizContainer } from './components/QuizContainer';
import { SkinTypeQuiz } from './components/SkinTypeQuiz';
import { LifestyleQuiz } from './components/LifestyleQuiz';
import { Results } from './components/Results';
import { getRecommendations } from './utils/recommendations';
import type { QuizState, SkinType } from './types/quiz';
import { lifestyleQuestions } from './types/questions';
import { skinTypeQuestions } from './types/skinAnalysis';

const TOTAL_STEPS = skinTypeQuestions.length + lifestyleQuestions.length;

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentStep: 1,
    gender: null,
    age: null,
    skinType: null,
    concerns: [],
    cleansingFrequency: null,
    sunscreenUsage: null,
    sleepHours: null,
    waterIntake: null,
    stressLevel: null,
    dietType: null,
    environment: null,
    makeupFrequency: null,
    exerciseFrequency: null,
    skincareBudget: null,
    skinSensitivity: null,
    completed: false
  });

  const handleSkinTypeComplete = (skinType: SkinType) => {
    setQuizState(prev => ({
      ...prev,
      skinType,
      currentStep: skinTypeQuestions.length + 1 // Move to first lifestyle question
    }));
  };

  const handleLifestyleAnswer = (field: string, value: any) => {
    setQuizState(prev => {
      const newState = {
        ...prev,
        [field]: value,
        currentStep: prev.currentStep + 1
      };

      // Check if we've completed all questions
      if (newState.currentStep > TOTAL_STEPS) {
        newState.completed = true;
      }

      return newState;
    });
  };

  const getCurrentQuestionIndex = () => {
    if (!quizState.skinType) return -1;
    return quizState.currentStep - skinTypeQuestions.length - 1;
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <Logo />
        
        {!quizState.completed ? (
          <QuizContainer currentStep={quizState.currentStep} totalSteps={TOTAL_STEPS}>
            {!quizState.skinType ? (
              <SkinTypeQuiz 
                onComplete={handleSkinTypeComplete}
                currentQuestion={quizState.currentStep - 1}
              />
            ) : (
              <LifestyleQuiz
                onAnswer={handleLifestyleAnswer}
                currentQuestion={getCurrentQuestionIndex()}
                totalQuestions={lifestyleQuestions.length}
              />
            )}
          </QuizContainer>
        ) : (
          <Results 
            products={getRecommendations(quizState)}
            onRestart={() => setQuizState(prev => ({ 
              ...prev, 
              currentStep: 1,
              completed: false,
              skinType: null,
              concerns: [],
              gender: null,
              age: null,
              cleansingFrequency: null,
              sunscreenUsage: null,
              sleepHours: null,
              waterIntake: null,
              stressLevel: null,
              dietType: null,
              environment: null,
              makeupFrequency: null,
              exerciseFrequency: null,
              skincareBudget: null,
              skinSensitivity: null
            }))}
          />
        )}
      </div>
    </div>
  );
}

export default App;
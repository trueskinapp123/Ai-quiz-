import React from 'react';
import { Sparkles } from 'lucide-react';
import { QuizProgress } from './QuizProgress';

interface QuizContainerProps {
  currentStep: number;
  totalSteps: number;
  children: React.ReactNode;
}

export const QuizContainer: React.FC<QuizContainerProps> = ({
  currentStep,
  totalSteps,
  children
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles className="w-6 h-6 text-[#C17F59]" />
        <h1 className="text-3xl font-semibold text-center text-neutral-800">
          Your Personalized Skincare Journey
        </h1>
      </div>

      <QuizProgress currentStep={currentStep} totalSteps={totalSteps} />
      
      {children}
    </div>
  );
};
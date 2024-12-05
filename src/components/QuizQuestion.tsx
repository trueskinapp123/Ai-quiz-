import React from 'react';

interface QuizQuestionProps {
  question: string;
  description?: string;
  children: React.ReactNode;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  description, 
  children 
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-medium text-neutral-800 mb-2">{question}</h2>
      {description && (
        <p className="text-neutral-600 mb-6">{description}</p>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};
import React from 'react';
import { QuizQuestion } from './QuizQuestion';
import { Button } from './Button';
import { lifestyleQuestions } from '../types/questions';

interface LifestyleQuizProps {
  onAnswer: (field: string, value: any) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export const LifestyleQuiz: React.FC<LifestyleQuizProps> = ({ 
  onAnswer, 
  currentQuestion,
  totalQuestions
}) => {
  // Check if we've exceeded the number of questions
  if (currentQuestion >= totalQuestions) {
    return null;
  }

  const question = lifestyleQuestions[currentQuestion];

  if (!question) {
    return null;
  }

  const handleSelect = (value: any) => {
    onAnswer(question.id, value);
  };

  return (
    <QuizQuestion
      question={question.question}
      description={question.description}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            variant="secondary"
            className="w-full text-left"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </QuizQuestion>
  );
};
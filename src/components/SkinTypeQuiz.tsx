import React from 'react';
import { QuizQuestion } from './QuizQuestion';
import { Button } from './Button';
import { skinTypeQuestions } from '../types/skinAnalysis';
import { analyzeSkinType } from '../utils/skinTypeAnalysis';
import type { SkinType } from '../types/quiz';

interface SkinTypeQuizProps {
  onComplete: (skinType: SkinType) => void;
  currentQuestion: number;
}

export const SkinTypeQuiz: React.FC<SkinTypeQuizProps> = ({ 
  onComplete,
  currentQuestion
}) => {
  const [answers, setAnswers] = React.useState<string[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (newAnswers.length === skinTypeQuestions.length) {
      const indicators = newAnswers.map((answer, index) => {
        const question = skinTypeQuestions[index];
        const option = question.options.find(opt => opt.value === answer);
        return option?.skinTypeIndicator || {};
      });
      
      const determinedSkinType = analyzeSkinType(indicators);
      onComplete(determinedSkinType);
    }
  };

  const question = skinTypeQuestions[currentQuestion];

  if (!question) {
    return null;
  }

  return (
    <QuizQuestion
      question={question.question}
      description={question.description}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <Button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
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
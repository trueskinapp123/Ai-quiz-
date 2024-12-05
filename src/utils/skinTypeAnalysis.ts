import type { SkinTypeIndicator } from '../types/skinAnalysis';
import type { SkinType } from '../types/quiz';

export const analyzeSkinType = (indicators: SkinTypeIndicator[]): SkinType => {
  const scores = indicators.reduce((acc, indicator) => {
    Object.entries(indicator).forEach(([type, score]) => {
      acc[type as SkinType] = (acc[type as SkinType] || 0) + score;
    });
    return acc;
  }, {} as Record<SkinType, number>);

  let maxScore = 0;
  let dominantType: SkinType = 'normal';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantType = type as SkinType;
    }
  });

  return dominantType;
};
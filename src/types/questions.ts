import type { QuizQuestion } from './quiz';

export const lifestyleQuestions: QuizQuestion[] = [
  {
    id: 'gender',
    question: 'What is your gender?',
    description: 'This helps us personalize your skincare recommendations.',
    options: [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
      { value: 'other', label: 'Other' }
    ]
  },
  {
    id: 'age',
    question: 'What is your age?',
    description: 'Different age groups have different skincare needs.',
    options: [
      { value: '18-24', label: '18-24' },
      { value: '25-34', label: '25-34' },
      { value: '35-44', label: '35-44' },
      { value: '45+', label: '45+' }
    ]
  },
  {
    id: 'concerns',
    question: 'What are your main skin concerns?',
    description: 'Select all that apply.',
    options: [
      { value: 'acne', label: 'Acne' },
      { value: 'aging', label: 'Signs of Aging' },
      { value: 'darkSpots', label: 'Dark Spots' },
      { value: 'dullness', label: 'Dullness' },
      { value: 'sensitivity', label: 'Sensitivity' },
      { value: 'uneven texture', label: 'Uneven Texture' },
      { value: 'large pores', label: 'Large Pores' },
      { value: 'redness', label: 'Redness' }
    ],
    multiple: true
  },
  {
    id: 'skinSensitivity',
    question: 'How sensitive is your skin to new products?',
    description: 'This helps us recommend gentle and suitable products.',
    options: [
      { value: 'very', label: 'Very Sensitive' },
      { value: 'somewhat', label: 'Somewhat Sensitive' },
      { value: 'rarely', label: 'Rarely Sensitive' },
      { value: 'not', label: 'Not Sensitive' }
    ]
  },
  {
    id: 'cleansingFrequency',
    question: 'How often do you cleanse your face?',
    description: 'Regular cleansing is essential for healthy skin.',
    options: [
      { value: 'once', label: 'Once a day' },
      { value: 'twice', label: 'Twice a day' },
      { value: 'more', label: 'More than twice a day' }
    ]
  },
  {
    id: 'sunscreenUsage',
    question: 'How often do you use sunscreen?',
    description: 'Sun protection is crucial for skin health.',
    options: [
      { value: 'never', label: 'Never' },
      { value: 'sometimes', label: 'Sometimes' },
      { value: 'daily', label: 'Daily' },
      { value: 'multiple', label: 'Multiple times a day' }
    ]
  },
  {
    id: 'environment',
    question: 'What type of environment do you live in?',
    description: 'Environmental factors can affect your skin significantly.',
    options: [
      { value: 'dry', label: 'Dry Climate' },
      { value: 'humid', label: 'Humid Climate' },
      { value: 'polluted', label: 'Urban/Polluted' },
      { value: 'moderate', label: 'Moderate Climate' }
    ]
  },
  {
    id: 'makeupFrequency',
    question: 'How often do you wear makeup?',
    description: 'This helps us recommend suitable cleansing products.',
    options: [
      { value: 'daily', label: 'Daily' },
      { value: 'occasionally', label: 'Occasionally' },
      { value: 'rarely', label: 'Rarely' },
      { value: 'never', label: 'Never' }
    ]
  },
  {
    id: 'sleepHours',
    question: 'How many hours do you sleep on average?',
    description: 'Sleep quality affects skin health.',
    options: [
      { value: 'less-six', label: 'Less than 6 hours' },
      { value: 'six-eight', label: '6-8 hours' },
      { value: 'more-eight', label: 'More than 8 hours' }
    ]
  },
  {
    id: 'waterIntake',
    question: 'How many glasses of water do you drink daily?',
    description: 'Hydration is key for healthy skin.',
    options: [
      { value: 'less-four', label: 'Less than 4 glasses' },
      { value: 'four-eight', label: '4-8 glasses' },
      { value: 'more-eight', label: 'More than 8 glasses' }
    ]
  },
  {
    id: 'stressLevel',
    question: 'How would you rate your stress level?',
    description: 'Stress can significantly impact skin health.',
    options: [
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' }
    ]
  },
  {
    id: 'dietType',
    question: 'How would you describe your diet?',
    description: 'Diet plays a crucial role in skin health.',
    options: [
      { value: 'balanced', label: 'Balanced' },
      { value: 'high-sugar', label: 'High in Sugar' },
      { value: 'high-fat', label: 'High in Fat' },
      { value: 'vegetarian', label: 'Vegetarian' },
      { value: 'vegan', label: 'Vegan' }
    ]
  },
  {
    id: 'exerciseFrequency',
    question: 'How often do you exercise?',
    description: 'Physical activity affects skin health through circulation and sweating.',
    options: [
      { value: 'daily', label: 'Daily' },
      { value: 'few-times', label: 'Few times a week' },
      { value: 'rarely', label: 'Rarely' },
      { value: 'never', label: 'Never' }
    ]
  },
  {
    id: 'skincareBudget',
    question: 'What is your monthly skincare budget?',
    description: 'This helps us recommend products within your preferred price range.',
    options: [
      { value: 'budget', label: 'Under $50' },
      { value: 'moderate', label: '$50-$100' },
      { value: 'premium', label: '$100-$200' },
      { value: 'luxury', label: '$200+' }
    ]
  }
];
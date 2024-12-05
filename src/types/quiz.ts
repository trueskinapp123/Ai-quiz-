export type Gender = 'male' | 'female' | 'other';

export type SkinType = 'normal' | 'oily' | 'dry' | 'combination' | 'sensitive';

export type SkinConcern = 
  | 'acne'
  | 'aging'
  | 'darkSpots'
  | 'dullness'
  | 'sensitivity'
  | 'uneven texture'
  | 'large pores'
  | 'redness';

export type CleansingFrequency = 'once' | 'twice' | 'more';
export type SunscreenUsage = 'never' | 'sometimes' | 'daily' | 'multiple';
export type SleepHours = 'less-six' | 'six-eight' | 'more-eight';
export type WaterIntake = 'less-four' | 'four-eight' | 'more-eight';
export type StressLevel = 'low' | 'medium' | 'high';
export type DietType = 'balanced' | 'high-sugar' | 'high-fat' | 'vegetarian' | 'vegan';
export type Environment = 'dry' | 'humid' | 'polluted' | 'moderate';
export type MakeupFrequency = 'daily' | 'occasionally' | 'rarely' | 'never';
export type ExerciseFrequency = 'daily' | 'few-times' | 'rarely' | 'never';
export type SkincareBudget = 'budget' | 'moderate' | 'premium' | 'luxury';
export type SkinSensitivity = 'very' | 'somewhat' | 'rarely' | 'not';

export interface Product {
  name: string;
  description: string;
  price: string;
  affiliateLink: string;
  imageUrl: string;
  category: 'cleanser' | 'toner' | 'serum' | 'moisturizer' | 'sunscreen' | 'treatment';
  keyIngredients: string[];
  suitableFor: SkinType[];
  benefits: string[];
}

export interface QuizState {
  currentStep: number;
  gender: Gender | null;
  age: string | null;
  skinType: SkinType | null;
  concerns: SkinConcern[];
  cleansingFrequency: CleansingFrequency | null;
  sunscreenUsage: SunscreenUsage | null;
  sleepHours: SleepHours | null;
  waterIntake: WaterIntake | null;
  stressLevel: StressLevel | null;
  dietType: DietType | null;
  environment: Environment | null;
  makeupFrequency: MakeupFrequency | null;
  exerciseFrequency: ExerciseFrequency | null;
  skincareBudget: SkincareBudget | null;
  skinSensitivity: SkinSensitivity | null;
  completed: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  description: string;
  options: {
    value: string;
    label: string;
  }[];
  multiple?: boolean;
}
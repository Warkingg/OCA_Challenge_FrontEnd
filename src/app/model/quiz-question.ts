import {Quiz} from './quiz';

export interface QuizQuestion {
  id ?: number;
  content ?: string;
  score ?: number;
  type ?: string;
  quiz ?: Quiz;
}

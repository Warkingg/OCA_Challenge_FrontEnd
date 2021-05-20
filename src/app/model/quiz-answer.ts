import {Quiz} from './quiz';
import {QuizQuestion} from './quiz-question';

export interface QuizAnswer {
  id ?: number;
  content ?: string;
  correct ?: boolean;
  quiz ?: Quiz;
  quizQuestion ?: QuizQuestion;
}

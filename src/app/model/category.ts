import {QuizQuestion} from './quiz-question';

export interface Category {
  id?: number;
  name?: string;
  quizQuestions?: QuizQuestion;
}

import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  listQuizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getQuizzes();
  }

  public getQuizzes(): void {
    this.quizService.getAllQuiz().subscribe (quizzes => {
        this.listQuizzes = quizzes;
      });
  }
}

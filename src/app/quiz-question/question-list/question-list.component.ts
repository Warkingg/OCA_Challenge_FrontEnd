import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../model/quiz-question';
import {QuestionService} from '../../service/quiz-question/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: QuizQuestion[] = [];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getAllQuestion();
  }

  getAllQuestion() {
    this.questionService.getAllQuestion().subscribe(questions => {
      this.questions = questions;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {QuizAnswer} from '../../model/quiz-answer';
import {AnswerService} from '../../service/quiz-answer/answer.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  answers: QuizAnswer[] = [];

  constructor(private answerService: AnswerService) {
  }

  ngOnInit() {
    this.getAllAnswer();
  }

  getAllAnswer() {
    this.answerService.getAllAnswer().subscribe(answers => {
      this.answers = answers;
    })
  }
}

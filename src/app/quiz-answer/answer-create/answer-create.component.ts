import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../model/quiz-question';
import {QuestionService} from '../../service/quiz-question/question.service';
import {NgForm} from '@angular/forms';
import {QuizAnswer} from '../../model/quiz-answer';
import {AnswerService} from '../../service/quiz-answer/answer.service';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {

  answer: QuizAnswer = {};

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
  }

  addAnswer(form: NgForm) {
    let newAnswer = form.value;
    this.answerService.createAnswer(newAnswer).subscribe(() => {
      alert("Create Successfully !!!");
      this.answer = {}
    }, error => {
      alert("Failed")
    })
  }

}

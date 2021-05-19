import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../model/quiz-question';
import {QuestionService} from '../../service/quiz-question/question.service';
import {ActivatedRoute} from '@angular/router';
import {QuizAnswer} from '../../model/quiz-answer';
import {AnswerService} from '../../service/quiz-answer/answer.service';

@Component({
  selector: 'app-answer-delete',
  templateUrl: './answer-delete.component.html',
  styleUrls: ['./answer-delete.component.css']
})
export class AnswerDeleteComponent implements OnInit {

  answer: QuizAnswer = {};
  id = -1;

  constructor(private answerService: AnswerService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
      this.getAnswerById(id);
    })
  }

  ngOnInit() {
  }

  private getAnswerById(id: number) {
    this.answerService.getAnswerById(id).subscribe(answer => {
      this.answer = answer;
    })
  }

  deleteAnswer(id: number) {
    this.answerService.deleteAnswer(id).subscribe(() => {
      alert("Đi lít sắc xét phu ly ")
    }, error => {
      alert("Phêuu")
    })
  }

}

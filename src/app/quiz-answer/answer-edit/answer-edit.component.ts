import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AnswerService} from '../../service/quiz-answer/answer.service';

@Component({
  selector: 'app-answer-edit',
  templateUrl: './answer-edit.component.html',
  styleUrls: ['./answer-edit.component.css']
})
export class AnswerEditComponent implements OnInit {

  answerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    correct: new FormControl(),
    quiz: new FormControl(),
    quizAnswer: new FormControl()
  });
  id: number = -1;

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
  getAnswerById(id: number) {
    this.answerService.getAnswerById(id).subscribe(answer => {
      this.answerForm = new FormGroup({
        id: new FormControl(answer.id),
        name: new FormControl(answer.content),
        correct: new FormControl(answer.correct),
        quiz: new FormControl(answer.quiz),
        quizQuestion: new FormControl(answer.quizQuestion)
      })
    })
  }

  updateAnswer(id: number){
    let thisAnswer = this.answerForm.value;
    this.answerService.updateAnswer(thisAnswer, id).subscribe(() => {
      alert("ắp đết sắc xét phu ny")
    }, error => {
      alert("phêuu")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../service/quiz-question/question.service';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {

  questionForm: FormGroup = new FormGroup({
    id: new FormControl(),
    content: new FormControl(),
    score: new FormControl(),
    type: new FormControl(),
    quiz: new FormControl()
  });
  id: number = -1;

  constructor(private questionService: QuestionService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
      this.getQuestionById(id);
    })
  }

  ngOnInit() {
  }

  getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => {
      this.questionForm = new FormGroup({
        id: new FormControl(question.id),
        name: new FormControl(question.content),
        score: new FormControl(question.score),
        type: new FormControl(question.type),
        quiz: new FormControl(question.quiz)
      })
    })
  }

  updateQuestion(id: number){
    let thisQuestion = this.questionForm.value;
    this.questionService.updateQuestion(thisQuestion, id).subscribe(() => {
      alert("ắp đết sắc xét phu ny")
    }, error => {
      alert("phêuu")
    })
  }
}

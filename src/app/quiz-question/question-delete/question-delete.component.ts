import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';
import {QuizQuestion} from '../../model/quiz-question';
import {QuestionService} from '../../service/quiz-question/question.service';

@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.css']
})
export class QuestionDeleteComponent implements OnInit {

  question: QuizQuestion = {};
  id = -1;

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

  private getQuestionById(id: number) {
    this.questionService.getQuestionById(id).subscribe(question => {
      this.question = question;
    })
  }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      alert("Đi lít sắc xét phu ly ")
    }, error => {
      alert("Phêuu")
    })
  }

}

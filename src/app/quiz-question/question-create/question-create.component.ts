import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {QuizQuestion} from '../../model/quiz-question';
import {QuestionService} from '../../service/quiz-question/question.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question: QuizQuestion = {};

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  addQuestion(form: NgForm) {
    let newQuestion = form.value;
    this.questionService.createQuestion(newQuestion).subscribe(() => {
      alert("Create Successfully !!!");
      this.question = {}
    }, error => {
      alert("Failed")
    })
  }

}

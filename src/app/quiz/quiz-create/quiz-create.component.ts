import { Component, OnInit } from '@angular/core';
import {Quiz} from '../../model/quiz';
import {NgForm} from '@angular/forms';
import {QuizService} from '../../service/quiz.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  quiz: Quiz = {};

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
  }

  createNewQuiz(form: NgForm) {
    let newQuiz = form.value;
    this.quizService.createNewQuiz(newQuiz).subscribe(() =>{
      alert('Created Successfully');
      this.quiz = {};
    }, error => {
      alert('Thất bại rồi tiếc quá');
    });
  }
}

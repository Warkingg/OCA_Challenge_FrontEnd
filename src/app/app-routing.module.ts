
import {QuizListComponent} from './quiz/quiz-list/quiz-list.component';
import {QuizCreateComponent} from './quiz/quiz-create/quiz-create.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {QuestionCreateComponent} from './quiz-question/question-create/question-create.component';
import {QuestionEditComponent} from './quiz-question/question-edit/question-edit.component';
import {QuestionDeleteComponent} from './quiz-question/question-delete/question-delete.component';
import {QuestionListComponent} from './quiz-question/question-list/question-list.component';
import {AnswerCreateComponent} from './quiz-answer/answer-create/answer-create.component';
import {AnswerEditComponent} from './quiz-answer/answer-edit/answer-edit.component';
import {AnswerDeleteComponent} from './quiz-answer/answer-delete/answer-delete.component';
import {AnswerListComponent} from './quiz-answer/answer-list/answer-list.component';
import {AdminHomepageComponent} from './admin-homepage/admin-homepage.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomepageComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:RegistrationComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  },
  {
    path: 'quizzes', component: QuizListComponent
  },
  {
    path:'quizzes/create', component: QuizCreateComponent
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/edit',
    component: CategoryEditComponent
  },
  {
    path: 'category/delete',
    component: CategoryDeleteComponent
  },
  {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'question/create',
    component: QuestionCreateComponent
  },
  {
    path: 'question/edit',
    component: QuestionEditComponent
  },
  {
    path: 'question/delete',
    component: QuestionDeleteComponent
  },
  {
    path: 'question/create',
    component: QuestionListComponent
  },
  {
    path: 'answer/create',
    component: AnswerCreateComponent
  },
  {
    path: 'answer/edit',
    component: AnswerEditComponent
  },
  {
    path: 'answer/delete',
    component: AnswerDeleteComponent
  },
  {
    path: 'answer/list',
    component: AnswerListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

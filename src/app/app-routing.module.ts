import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizListComponent} from './quiz/quiz-list/quiz-list.component';
import {QuizCreateComponent} from './quiz/quiz-create/quiz-create.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {
    path:'quiz',
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
    path: 'quizzes', component: QuizListComponent
  },
  {
    path:'quizzes/create', component: QuizCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

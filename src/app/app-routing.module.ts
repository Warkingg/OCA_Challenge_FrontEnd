
import {QuizListComponent} from './quiz/quiz-list/quiz-list.component';
import {QuizCreateComponent} from './quiz/quiz-create/quiz-create.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ProfileComponent} from "./user/profile/profile.component";


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
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
    path:'profile/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

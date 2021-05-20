import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {NgModule} from '@angular/core';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { QuestionCreateComponent } from './quiz-question/question-create/question-create.component';

import {SidebarComponent} from './sidebar/sidebar.component';
import { QuestionDeleteComponent } from './quiz-question/question-delete/question-delete.component';
import { QuestionEditComponent } from './quiz-question/question-edit/question-edit.component';
import { QuestionListComponent } from './quiz-question/question-list/question-list.component';
import { AnswerCreateComponent } from './quiz-answer/answer-create/answer-create.component';
import { AnswerDeleteComponent } from './quiz-answer/answer-delete/answer-delete.component';
import { AnswerEditComponent } from './quiz-answer/answer-edit/answer-edit.component';
import { AnswerListComponent } from './quiz-answer/answer-list/answer-list.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizCreateComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryListComponent,
    QuestionCreateComponent,
    SidebarComponent,
    QuestionDeleteComponent,
    QuestionEditComponent,
    QuestionListComponent,
    AnswerCreateComponent,
    AnswerDeleteComponent,
    AnswerEditComponent,
    AnswerListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

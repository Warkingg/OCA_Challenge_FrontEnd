import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { QuestionCreateComponent } from './quiz-question/question-create/question-create.component';
import { QuestionDeleteComponent } from './quiz-question/question-delete/question-delete.component';
import { QuestionEditComponent } from './quiz-question/question-edit/question-edit.component';
import { QuestionListComponent } from './quiz-question/question-list/question-list.component';
import { AnswerCreateComponent } from './quiz-answer/answer-create/answer-create.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizCreateComponent,
    NavBarComponent,
    SidebarComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent,
    CategoryListComponent,
    QuestionCreateComponent,
    QuestionDeleteComponent,
    QuestionEditComponent,
    QuestionListComponent,
    AnswerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

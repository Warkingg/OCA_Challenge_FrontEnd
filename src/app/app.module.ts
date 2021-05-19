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
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizCreateComponent,
    NavBarComponent,
    SidebarComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryComponent,
    CategoryEditComponent
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

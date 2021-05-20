import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';
import {QuizQuestion} from '../../model/quiz-question';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  createQuestion(question: QuizQuestion): Observable<QuizQuestion> {
    return this.http.post<QuizQuestion>(`${API_URL}/question/create`, question);
  }

  getQuestionById(id: number): Observable<QuizQuestion>{
    return this.http.get<QuizQuestion>(`${API_URL}/questions/find/${id}`);
  }

  updateQuestion(question: QuizQuestion, id: number): Observable<QuizQuestion>{
    return this.http.put<QuizQuestion>(`${API_URL}/question/update/${id}`, question)
  }

  getAllQuestion(): Observable<QuizQuestion[]>{
    return this.http.get<QuizQuestion[]>(`${API_URL}/question/list`)
  }

  deleteQuestion(id: number): Observable<QuizQuestion>{
    return this.http.delete<QuizQuestion>(`${API_URL}/question/delete/${id}`)
  }
}

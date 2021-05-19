import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QuizQuestion} from '../../model/quiz-question';
import {Observable} from 'rxjs';
import {QuizAnswer} from '../../model/quiz-answer';

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createAnswer(answer: QuizAnswer): Observable<QuizAnswer> {
    return this.http.post<QuizAnswer>(`${API_URL}/answer/create`, answer);
  }

  getAnswerById(id: number): Observable<QuizAnswer>{
    return this.http.get<QuizAnswer>(`${API_URL}/answer/find/${id}`);
  }

  updateAnswer(answer: QuizAnswer, id: number): Observable<QuizAnswer>{
    return this.http.put<QuizAnswer>(`${API_URL}/answer/update/${id}`, answer)
  }

  getAllAnswer(): Observable<QuizAnswer[]>{
    return this.http.get<QuizAnswer[]>(`${API_URL}/answer/list`)
  }

  deleteAnswer(id: number): Observable<QuizAnswer>{
    return this.http.delete<QuizAnswer>(`${API_URL}/answer/delete/${id}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${API_URL}/categories`, category);
  }

  getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`${API_URL}/categories/${id}`);
  }

  updateCategory(category: Category, id: number): Observable<Category>{
    return this.http.put<Category>(`${API_URL}/categories/${id}`, category)
  }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(`${API_URL}/categories`)
  }

  deleteCategory(id: number): Observable<Category>{
    return this.http.delete<Category>(`${API_URL}/categories/${id}`)
  }
}

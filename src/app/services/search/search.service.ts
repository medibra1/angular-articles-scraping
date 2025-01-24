import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:3000/api/search'; // URL de votre backend Node.js

  constructor(private http: HttpClient) {}

  searchArticles(query: string): Observable<SearchResult[]> {
    return this.http.post<SearchResult[]>(this.apiUrl, { query });
  }
  }


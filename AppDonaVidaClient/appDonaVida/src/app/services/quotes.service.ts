import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../interfaces/responses/quoteResponse';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private urlApi = `https://localhost:7082/api/quotes`;
  constructor(private http: HttpClient) {}

  getQuotes(): Observable<QuoteResponse> {
    return this.http.get<QuoteResponse>(`${this.urlApi}`);
  }

  AcceptQuote(id: string): Observable<QuoteResponse> {
    return this.http.get<QuoteResponse>(`${this.urlApi}/${id}`);
  }

  createQuote(quote: any): Observable<QuoteResponse> {
    return this.http.post<QuoteResponse>(`${this.urlApi}`, quote);
  }
}

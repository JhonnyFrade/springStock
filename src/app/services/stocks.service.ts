import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StocksResponse } from './stocks-response.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private apiUrl = 'https://brapi.dev/api/quote/list';
  constructor(private http: HttpClient) { }

  getStocks(): Observable<StocksResponse> {
    const params = new HttpParams()
      .set('limit', '10')
      .set('sector', 'finance')
      .set('token', 'aRYLqUMErnW8GHkqvk4YJg');
  
    return this.http.get<StocksResponse>(this.apiUrl, { params });
  }
}

//  req exemple usado "https://brapi.dev/api/quote/list?search=TR&sortBy=close&sortOrder=desc&limit=10&sector=finance&token=aRYLqUMErnW8GHkqvk4YJg"
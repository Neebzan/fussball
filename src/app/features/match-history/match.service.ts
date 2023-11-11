import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './models';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/matches';

  public getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.baseUrl);
  }
}

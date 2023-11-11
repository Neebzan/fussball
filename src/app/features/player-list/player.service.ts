import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/players';

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseUrl);
  }
}

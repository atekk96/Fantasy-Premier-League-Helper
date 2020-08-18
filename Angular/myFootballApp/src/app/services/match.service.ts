import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchUrl: string;

  constructor(private http: HttpClient) {
    this.matchUrl = 'http://localhost:8080/matches'
   }

   public save(match: Match){
    return this.http.post<Match>(this.matchUrl, match);
   }

   public getLastMatch(): Observable<Match> {
    return this.http.get<Match>(this.matchUrl + "/last");
   }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl: string;

  constructor(private http: HttpClient) {
    this.teamsUrl = 'http://localhost:8080/teams';
   }

  public getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl);
  }

  public getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(this.teamsUrl+'/'+id)
  }
}

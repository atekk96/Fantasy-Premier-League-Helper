import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/players';
   }

   public getAll(): Observable<Player[]> {
      return this.http.get<Player[]>(this.playersUrl);
   }

   public save(player: Player) {
     return this.http.post<Player>(this.playersUrl, player);
   } 

   public getPlayersForTeam(id: number): Observable<Player[]> {
     return this.http.get<Player[]>(this.playersUrl+'/'+ id);
   }

}

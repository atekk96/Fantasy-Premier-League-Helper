import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Playermatchdetails } from '../models/playermatchdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayermatchdetailService {

  private detailUrl: string;

  constructor(private http: HttpClient) {
    this.detailUrl = 'http://localhost:8080/details'
   }

   public save(pmd: Playermatchdetails) {
    return this.http.post<Playermatchdetails>(this.detailUrl, pmd);
   }

   public getAllDetails(): Observable<Playermatchdetails[]> {
     return this.http.get<Playermatchdetails[]>(this.detailUrl);
   }

}

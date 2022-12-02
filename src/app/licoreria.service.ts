import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Licoreria} from "./Licorerias";

@Injectable({
  providedIn: 'root'
})
export class LicoreriaService {

  private LicoreriaURL = 'http://localhost:3000/licoreria';

  constructor(private http: HttpClient) { }

  gets(): Observable<Licoreria[]>
  {
    return this.http.get<Licoreria[]>(this.LicoreriaURL);
  }

  get(id: number): Observable<Licoreria>
  {
    const url = `${this.LicoreriaURL}/${id}`;
    return this.http.get<Licoreria>(url);
  }
  search(id:string): Observable<Licoreria[]>{
    if(!id.trim()){
      return of([]);
    }
    return this.http.get<Licoreria[]>(`${this.LicoreriaURL}/?nombre=${id}`);
  }
  add(licoreria: Licoreria): Observable<Licoreria>
  {
    return this.http.post<Licoreria>(this.LicoreriaURL,licoreria);
  }
  delete(id: number): Observable<Licoreria>{
    const url = `${this.LicoreriaURL}/${id}`;
    return this.http.delete<Licoreria>(url);
  }
  update(id: number,licoreria: Licoreria): Observable<Licoreria>{
    return this.http.put<Licoreria>(`${this.LicoreriaURL}/${id}`, licoreria);

  }
}

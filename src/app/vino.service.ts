import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Vino} from "./Vinos";

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  private VinoUrl = 'http://localhost:3000/licoreria/1/vinos';

  constructor(private http: HttpClient) { }

  gets(): Observable<Vino[]>
  {
    return this.http.get<Vino[]>(this.VinoUrl);
  }

  get(id: number): Observable<Vino>
  {
    const url = `${this.VinoUrl}/${id}`;
    return this.http.get<Vino>(url);
  }
  search(id:string): Observable<Vino[]>{
    if(!id.trim()){
      return of([]);
    }
    return this.http.get<Vino[]>(`${this.VinoUrl}/?nombre=${id}`);
  }
  add(vino: Vino): Observable<Vino>
  {
    return this.http.post<Vino>(this.VinoUrl,vino);
  }
  delete(id: number): Observable<Vino>{
    const url = `${this.VinoUrl}/${id}`;
    return this.http.delete<Vino>(url);
  }
  update(id: number,vino: Vino): Observable<Vino>{
    return this.http.put<Vino>(`${this.VinoUrl}/${id}`, vino);

  }
}

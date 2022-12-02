import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Facturaciones} from "./Facturaciones";

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  private FacturacionUrl = 'http://localhost:3000/licoreria';
  private FactUrl = 'http://localhost:3000/licoreria/facturacion/1';

  constructor(private http: HttpClient) { }

  gets(): Observable<Facturaciones[]>
  {
    return this.http.get<Facturaciones[]>(this.FacturacionUrl);
  }

  get(id: number): Observable<Facturaciones>
  {
    const url = `${this.FacturacionUrl}/${id}`;
    return this.http.get<Facturaciones>(url);
  }

  getFact(id: number): Observable<Facturaciones>
  {
    const url = `${this.FactUrl}/${id}`;
    return this.http.get<Facturaciones>(url);
  }
  search(id:string): Observable<Facturaciones[]>{
    if(!id.trim()){
      return of([]);
    }
    return this.http.get<Facturaciones[]>(`${this.FacturacionUrl}/?nombre=${id}`);
  }
  add(facturacion: Facturaciones): Observable<Facturaciones>
  {
    return this.http.post<Facturaciones>(this.FacturacionUrl,facturacion);
  }
  delete(id: number): Observable<Facturaciones>{
    const url = `${this.FacturacionUrl}/${id}`;
    return this.http.delete<Facturaciones>(url);
  }
  update(id: number,facturacion: Facturaciones): Observable<Facturaciones>{
    return this.http.put<Facturaciones>(`${this.FacturacionUrl}/${id}`, facturacion);

  }
}

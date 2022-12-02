import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Facturaciones} from "../Facturaciones";
import {FacturacionService} from "../factura.service";

@Component({
  selector: 'app-facturacion-search',
  templateUrl: './facturacion-search.component.html',
  styleUrls: ['./facturacion-search.component.scss']
})
export class FacturacionSearchComponent implements OnInit {

  facturas$!: Observable<Facturaciones[]>;
  private searchTerms = new Subject<string>();
  constructor(private facturaService: FacturacionService){}

  search(id: string): void{
    this.searchTerms.next(id);
  }

  ngOnInit(): void {
    this.facturas$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id: string)=> this.facturaService.search(id))
    )
  }

}

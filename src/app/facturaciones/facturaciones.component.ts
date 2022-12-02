import { Component, OnInit } from '@angular/core';
import {Facturaciones} from "../Facturaciones";
import {FacturacionService} from "../factura.service";

@Component({
  selector: 'app-facturaciones',
  templateUrl: './facturaciones.component.html',
  styleUrls: ['./facturaciones.component.scss']
})
export class FacturacionesComponent implements OnInit {

  facturaciones: Facturaciones[]=[];
  constructor(private facturacionservice: FacturacionService) { }

  ngOnInit(): void {
    this.get();
  }
  get(): void{
    this.facturacionservice.gets()
      .subscribe(facturaciones => this.facturaciones = facturaciones);
  }

  add(firstName: string, lastName: string, nit: string, total: string): void{
    let facturacion= {} as Facturaciones;
    facturacion.firstName=firstName.trim();
    facturacion.lastName=lastName.trim();
    facturacion.nit=+nit.trim();
    facturacion.total=+total.trim();

    let nom =facturacion.firstName.trim();
    if(!nom){return}
    this.facturacionservice.add(facturacion)
      .subscribe(facturacion => {
        this.facturaciones.push(facturacion);
      });
  }
  delete(facturacion: Facturaciones): void{
    this.facturaciones = this.facturaciones.filter(v => v !== facturacion);
    this.facturacionservice.delete(facturacion.id).subscribe();
  }

}

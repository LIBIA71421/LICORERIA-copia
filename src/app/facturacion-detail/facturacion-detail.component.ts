import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import {Licoreria} from "../Licorerias";
import {ActivatedRoute} from "@angular/router";
import {LicoreriaService} from "../licoreria.service";
import {FacturacionService} from "../factura.service";
import {Facturaciones} from "../Facturaciones";

@Component({
  selector: 'app-facturacion-detail',
  templateUrl: './facturacion-detail.component.html',
  styleUrls: ['./facturacion-detail.component.scss']
})
export class FacturacionDetailComponent implements OnInit {

  factura: Facturaciones | undefined;
  constructor(
    private route: ActivatedRoute,
    private facturacionService: FacturacionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(): void {
    const id= parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.facturacionService.get(id)
      .subscribe(factura=>this.factura = factura);
  }
  getFact(): void {
    const id= parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.facturacionService.get(id)
      .subscribe(factura=>this.factura = factura);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.factura) {
      this.facturacionService.update(this.factura.id,this.factura)
        .subscribe(() => this.goBack());
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {Licoreria} from "../Licorerias";
import {LicoreriaService} from "../licoreria.service";

@Component({
  selector: 'app-licorerias',
  templateUrl: './licorerias.component.html',
  styleUrls: ['./licorerias.component.scss']
})
export class LicoreriasComponent implements OnInit {

  licorerias: Licoreria[]=[];
  constructor(private licoreriaservice: LicoreriaService) { }

  ngOnInit(): void {
    this.get();
  }
  get(): void{
    this.licoreriaservice.gets()
      .subscribe(licorerias => this.licorerias = licorerias);
  }

  add(nombre: string, ubicacion: string): void{
    let licoreria= {} as Licoreria;
    licoreria.nombre=nombre.trim();
    licoreria.ubicacion=ubicacion.trim();

    let nom =licoreria.nombre.trim();
    if(!nom){return}
    this.licoreriaservice.add(licoreria)
      .subscribe(licoreria => {
        this.licorerias.push(licoreria);
      });
  }
  delete(licoreria: Licoreria): void{
    this.licorerias = this.licorerias.filter(v => v !== licoreria);
    this.licoreriaservice.delete(licoreria.id).subscribe();
  }

}

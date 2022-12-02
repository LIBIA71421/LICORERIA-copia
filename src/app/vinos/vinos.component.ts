import { Component, OnInit } from '@angular/core';
import {VinoService} from "../vino.service";
import {Vino} from "../Vinos";

@Component({
  selector: 'app-vinos',
  templateUrl: './vinos.component.html',
  styleUrls: ['./vinos.component.scss']
})
export class VinosComponent implements OnInit {

  vinos: Vino[]=[];
  constructor(private vinoservice: VinoService) { }

  ngOnInit(): void {
    this.get();
  }
  get(): void{
    this.vinoservice.gets()
      .subscribe(vinos => this.vinos = vinos);
  }

  add(nombre: string, cantidad: string, marca: string, anio: string, tipo: string): void{
    let vino= {} as Vino;
    vino.nombre=nombre.trim();
    vino.cantidad=+(cantidad.trim());
    vino.marca=marca.trim();
    vino.anio=+(anio.trim());
    vino.tipo=tipo.trim();

    let nom =vino.nombre.trim();
    if(!nom){return}
    this.vinoservice.add(vino)
      .subscribe(vino => {
        this.vinos.push(vino);
      });
  }
  delete(vino: Vino): void{
    this.vinos = this.vinos.filter(v => v !== vino);
    this.vinoservice.delete(vino.id).subscribe();
  }

}

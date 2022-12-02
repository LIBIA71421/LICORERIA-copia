import { Component, OnInit } from '@angular/core';
import {Vino} from "../Vinos";
import {ActivatedRoute} from "@angular/router";
import {VinoService} from "../vino.service";

import { Location } from '@angular/common';

@Component({
  selector: 'app-vino-detail',
  templateUrl: './vino-detail.component.html',
  styleUrls: ['./vino-detail.component.scss']
})
export class VinoDetailComponent implements OnInit {

  vino: Vino | undefined;
  constructor(
    private route: ActivatedRoute,
    private vinoService: VinoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(): void {
    const id= parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.vinoService.get(id)
      .subscribe(vino=>this.vino = vino);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.vino) {
      this.vinoService.update(this.vino.id,this.vino)
        .subscribe(() => this.goBack());
    }
  }

}

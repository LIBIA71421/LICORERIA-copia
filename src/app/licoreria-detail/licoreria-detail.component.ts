import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LicoreriaService} from "../licoreria.service";
import {Licoreria} from "../Licorerias";
import { Location } from '@angular/common';

@Component({
  selector: 'app-licoreria-detail',
  templateUrl: './licoreria-detail.component.html',
  styleUrls: ['./licoreria-detail.component.scss']
})
export class LicoreriaDetailComponent implements OnInit {

  licoreria: Licoreria | undefined;
  constructor(
    private route: ActivatedRoute,
    private licoreriaService: LicoreriaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(): void {
    const id= parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.licoreriaService.get(id)
      .subscribe(licoreria=>this.licoreria = licoreria);
  }
  goBack():void{
    this.location.back();
  }
  save(): void {
    if (this.licoreria) {
      this.licoreriaService.update(this.licoreria.id,this.licoreria)
        .subscribe(() => this.goBack());
    }
  }

}

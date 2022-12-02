import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {VinoService} from "../vino.service";
import {Vino} from "../Vinos";

@Component({
  selector: 'app-vino-search',
  templateUrl: './vino-search.component.html',
  styleUrls: ['./vino-search.component.scss']
})
export class VinoSearchComponent implements OnInit {

  vinos$!: Observable<Vino[]>;
  private searchTerms = new Subject<string>();
  constructor(private vinoService: VinoService){}

  search(id: string): void{
    this.searchTerms.next(id);
  }

  ngOnInit(): void {
    this.vinos$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id: string)=> this.vinoService.search(id))
    )
  }

}

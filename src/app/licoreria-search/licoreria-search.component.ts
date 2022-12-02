import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Licoreria} from "../Licorerias";
import {LicoreriaService} from "../licoreria.service";

@Component({
  selector: 'app-licoreria-search',
  templateUrl: './licoreria-search.component.html',
  styleUrls: ['./licoreria-search.component.scss']
})
export class LicoreriaSearchComponent implements OnInit {

  licorerias$!: Observable<Licoreria[]>;
  private searchTerms = new Subject<string>();
  constructor(private licoreriaService: LicoreriaService){}

  search(id: string): void{
    this.searchTerms.next(id);
  }

  ngOnInit(): void {
    this.licorerias$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((id: string)=> this.licoreriaService.search(id))
    )
  }

}

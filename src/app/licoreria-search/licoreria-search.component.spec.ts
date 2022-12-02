import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicoreriaSearchComponent } from './licoreria-search.component';

describe('LicoreriaSearchComponent', () => {
  let component: LicoreriaSearchComponent;
  let fixture: ComponentFixture<LicoreriaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicoreriaSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicoreriaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

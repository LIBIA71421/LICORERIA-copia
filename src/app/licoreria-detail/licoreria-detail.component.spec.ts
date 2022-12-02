import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicoreriaDetailComponent } from './licoreria-detail.component';

describe('LicoreriaDetailComponent', () => {
  let component: LicoreriaDetailComponent;
  let fixture: ComponentFixture<LicoreriaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicoreriaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicoreriaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoSearchComponent } from './vino-search.component';

describe('VinoSearchComponent', () => {
  let component: VinoSearchComponent;
  let fixture: ComponentFixture<VinoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

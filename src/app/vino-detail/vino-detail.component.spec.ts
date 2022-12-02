import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinoDetailComponent } from './vino-detail.component';

describe('VinoDetailComponent', () => {
  let component: VinoDetailComponent;
  let fixture: ComponentFixture<VinoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

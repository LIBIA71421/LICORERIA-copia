import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicoreriasComponent } from './licorerias.component';

describe('LicoreriasComponent', () => {
  let component: LicoreriasComponent;
  let fixture: ComponentFixture<LicoreriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicoreriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicoreriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionDetailComponent } from './facturacion-detail.component';

describe('FacturacionDetailComponent', () => {
  let component: FacturacionDetailComponent;
  let fixture: ComponentFixture<FacturacionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

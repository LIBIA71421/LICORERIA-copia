import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionSearchComponent } from './facturacion-search.component';

describe('FacturacionSearchComponent', () => {
  let component: FacturacionSearchComponent;
  let fixture: ComponentFixture<FacturacionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

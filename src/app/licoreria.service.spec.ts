import { TestBed } from '@angular/core/testing';

import { LicoreriaService } from './licoreria.service';

describe('LicoreriaService', () => {
  let service: LicoreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicoreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

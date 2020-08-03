import { TestBed } from '@angular/core/testing';

import { CalculoFreteService } from './calculo-frete.service';

describe('CalculoFreteService', () => {
  let service: CalculoFreteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoFreteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

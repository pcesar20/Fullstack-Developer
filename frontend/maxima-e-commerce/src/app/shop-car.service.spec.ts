import { TestBed } from '@angular/core/testing';

import { ShopCarService } from './shop-car.service';

describe('ShopCarService', () => {
  let service: ShopCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

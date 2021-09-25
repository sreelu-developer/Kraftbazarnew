import { TestBed } from '@angular/core/testing';

import { WaitingproductsService } from './waitingproducts.service';

describe('WaitingproductsService', () => {
  let service: WaitingproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitingproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

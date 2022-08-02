import { TestBed } from '@angular/core/testing';

import { TypeCahierChargeServiceService } from './type-cahier-charge-service.service';

describe('TypeCahierChargeServiceService', () => {
  let service: TypeCahierChargeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCahierChargeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

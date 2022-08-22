import { TestBed } from '@angular/core/testing';

import { SoumissionnaireService } from '../services/soumissionnaire.service';

describe('SoumissionnaireService', () => {
  let service: SoumissionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoumissionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

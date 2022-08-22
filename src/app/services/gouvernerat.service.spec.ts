import { TestBed } from '@angular/core/testing';

import { GouverneratService } from './gouvernerat.service';

describe('GouverneratService', () => {
  let service: GouverneratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GouverneratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

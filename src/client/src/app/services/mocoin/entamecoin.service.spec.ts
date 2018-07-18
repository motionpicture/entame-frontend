import { TestBed, inject } from '@angular/core/testing';

import { MocoinService } from './mocoin.service';

describe('MocoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MocoinService]
    });
  });

  it('should be created', inject([MocoinService], (service: MocoinService) => {
    expect(service).toBeTruthy();
  }));
});

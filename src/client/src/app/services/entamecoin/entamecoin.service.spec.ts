import { TestBed, inject } from '@angular/core/testing';

import { EntamecoinService } from './entamecoin.service';

describe('EntamecoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntamecoinService]
    });
  });

  it('should be created', inject([EntamecoinService], (service: EntamecoinService) => {
    expect(service).toBeTruthy();
  }));
});

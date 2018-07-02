import { TestBed, inject } from '@angular/core/testing';

import { SasakiService } from './sasaki.service';

describe('SasakiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SasakiService]
    });
  });

  it('should be created', inject([SasakiService], (service: SasakiService) => {
    expect(service).toBeTruthy();
  }));
});

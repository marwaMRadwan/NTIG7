import { TestBed } from '@angular/core/testing';

import { ProvidersdataService } from './providersdata.service';

describe('ProvidersdataService', () => {
  let service: ProvidersdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

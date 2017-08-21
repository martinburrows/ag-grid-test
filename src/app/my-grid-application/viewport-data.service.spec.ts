import { TestBed, inject } from '@angular/core/testing';

import { ViewportDataService } from './viewport-data.service';

describe('ViewportDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewportDataService]
    });
  });

  it('should be created', inject([ViewportDataService], (service: ViewportDataService) => {
    expect(service).toBeTruthy();
  }));
});

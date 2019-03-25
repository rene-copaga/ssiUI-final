import { TestBed, inject } from '@angular/core/testing';

import { DetailActivityService } from './detail-activity.service';

describe('DetailActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailActivityService]
    });
  });

  it('should be created', inject([DetailActivityService], (service: DetailActivityService) => {
    expect(service).toBeTruthy();
  }));
});

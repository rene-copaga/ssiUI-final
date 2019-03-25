import { TestBed, inject } from '@angular/core/testing';

import { AssignationService } from './assignation.service';

describe('AssignationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignationService]
    });
  });

  it('should be created', inject([AssignationService], (service: AssignationService) => {
    expect(service).toBeTruthy();
  }));
});

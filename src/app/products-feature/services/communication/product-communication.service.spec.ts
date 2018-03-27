import { TestBed, inject } from '@angular/core/testing';

import { ProductcommunicationService } from './productcommunication.service';

describe('ProductcommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductcommunicationService]
    });
  });

  it('should be created', inject([ProductcommunicationService], (service: ProductcommunicationService) => {
    expect(service).toBeTruthy();
  }));
});

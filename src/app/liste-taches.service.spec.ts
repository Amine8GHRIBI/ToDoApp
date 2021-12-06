import { TestBed } from '@angular/core/testing';

import { ListeTachesService } from './liste-taches.service';

describe('ListeTachesService', () => {
  let service: ListeTachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeTachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

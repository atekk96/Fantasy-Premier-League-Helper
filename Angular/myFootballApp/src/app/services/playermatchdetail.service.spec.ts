import { TestBed } from '@angular/core/testing';

import { PlayermatchdetailService } from './playermatchdetail.service';

describe('PlayermatchdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayermatchdetailService = TestBed.get(PlayermatchdetailService);
    expect(service).toBeTruthy();
  });
});

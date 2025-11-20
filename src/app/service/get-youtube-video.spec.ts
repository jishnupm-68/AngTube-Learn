import { TestBed } from '@angular/core/testing';

import { GetYoutubeVideo } from './get-youtube-video';

describe('GetYoutubeVideo', () => {
  let service: GetYoutubeVideo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetYoutubeVideo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

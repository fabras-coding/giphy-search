import { GiphySearchListModule } from './giphy-search-list.module';

describe('GiphySearchListModule', () => {
  let giphySearchListModule: GiphySearchListModule;

  beforeEach(() => {
    giphySearchListModule = new GiphySearchListModule();
  });

  it('should create an instance', () => {
    expect(giphySearchListModule).toBeTruthy();
  });
});

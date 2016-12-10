import { VernamPage } from './app.po';

describe('vernam App', function() {
  let page: VernamPage;

  beforeEach(() => {
    page = new VernamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

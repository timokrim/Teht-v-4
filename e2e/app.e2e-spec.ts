import { UusappPage } from './app.po';

describe('uusapp App', function() {
  let page: UusappPage;

  beforeEach(() => {
    page = new UusappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

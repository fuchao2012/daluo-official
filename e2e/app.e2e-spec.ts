import { OfficialPage } from './app.po';

describe('official App', () => {
  let page: OfficialPage;

  beforeEach(() => {
    page = new OfficialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { MifPage } from './app.po';

describe('mif App', () => {
  let page: MifPage;

  beforeEach(() => {
    page = new MifPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

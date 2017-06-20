import { Jmugz3.Github.IoPage } from './app.po';

describe('jmugz3.github.io App', () => {
  let page: Jmugz3.Github.IoPage;

  beforeEach(() => {
    page = new Jmugz3.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

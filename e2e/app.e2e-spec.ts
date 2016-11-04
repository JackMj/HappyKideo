import { HappyKideoPage } from './app.po';

describe('happy-kideo App', function() {
  let page: HappyKideoPage;

  beforeEach(() => {
    page = new HappyKideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

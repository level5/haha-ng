import { HahaNgPage } from './app.po';

describe('haha-ng App', () => {
  let page: HahaNgPage;

  beforeEach(() => {
    page = new HahaNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

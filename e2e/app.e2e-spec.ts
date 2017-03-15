import { PetiscoolClientPage } from './app.po';

describe('petiscool-client App', function() {
  let page: PetiscoolClientPage;

  beforeEach(() => {
    page = new PetiscoolClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

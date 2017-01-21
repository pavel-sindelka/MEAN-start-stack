import {TmpPage} from './app.po';

describe('tmp App', function () {
  let page: TmpPage;

  beforeEach(() => {
    page = new TmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getId()).toEqual('logo');
  });
});

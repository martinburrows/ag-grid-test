import { AgGridPage } from './app.po';

describe('ag-grid App', () => {
  let page: AgGridPage;

  beforeEach(() => {
    page = new AgGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

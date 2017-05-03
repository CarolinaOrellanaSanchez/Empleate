import { ProyectoPruebaPage } from './app.po';

describe('proyecto-prueba App', () => {
  let page: ProyectoPruebaPage;

  beforeEach(() => {
    page = new ProyectoPruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

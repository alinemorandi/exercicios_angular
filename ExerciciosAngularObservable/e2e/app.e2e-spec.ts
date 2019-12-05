import { ExerciciosAngularObservablePage } from './app.po';

describe('exercicios-angular-observable App', function() {
  let page: ExerciciosAngularObservablePage;

  beforeEach(() => {
    page = new ExerciciosAngularObservablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

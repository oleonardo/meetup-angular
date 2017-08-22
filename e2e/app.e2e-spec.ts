import { MeetupAngularPage } from './app.po';

describe('meetup-angular App', () => {
  let page: MeetupAngularPage;

  beforeEach(() => {
    page = new MeetupAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

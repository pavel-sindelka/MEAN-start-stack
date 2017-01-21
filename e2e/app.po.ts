import {browser, element, by} from 'protractor';

export class TmpPage {
  navigateTo() {
    return browser.get('/');
  }

  getId() {
    console.log(element(by.css('app-root a>span')));
    return element(by.id('logo')).getAttribute('id');
  }
}

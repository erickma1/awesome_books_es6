/* eslint-disable no-unused-vars */
import { bookManager } from './modules/bookManager.js';
import { timeDisplayer } from './modules/dateModule.js';
import { initVisitedMenu } from './modules/visitedMenu.js';
import { DisplaySections } from './modules/display.js';

class App {
  constructor() {
    this.form = document.querySelector('form');
    this.init();
  }

  init() {
    initVisitedMenu();
    bookManager.displayBooks();
    DisplaySections.singlePage();
    this.setupFormEventListeners();
  }

  setupFormEventListeners() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      bookManager.addNewData();
    });
  }
}

const app = new App();
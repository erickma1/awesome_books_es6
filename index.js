import { bookManager } from './modules/bookManager.js';
import { timeDisplayer } from './modules/dateModule.js';
import { initVisitedMenu } from './modules/visitedMenu.js';
import { DisplaySections } from './modules/display.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    initVisitedMenu();
    bookManager.displayBooks();
    DisplaySections.singlePage();
    this.setupFormEventListeners();
  }

  setupFormEventListeners() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      bookManager.addNewData();
    });
  }
}

new App();

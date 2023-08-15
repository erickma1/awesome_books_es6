import { DateTime } from './luxon.js';

class TimeDisplayer {
  constructor() {
    this.dateTimeElement = document.getElementById('datetime');
    this.startUpdating();
  }

  startUpdating() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const dt = DateTime.utc().toLocal();
    this.dateTimeElement.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }
}
/* eslint-disable import/prefer-default-export */
export const timeDisplayer = new TimeDisplayer();
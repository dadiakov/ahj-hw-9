/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

export default class Collapse {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.element = element;
    this.content = this.element.querySelector('.collapse-content');
    this.collapseButton = this.element.querySelector('.collapse-button');
    this.collapseButton.addEventListener('click', this.showHideContent.bind(this));
  }

  showHideContent() {
    this.content.classList.toggle('collapse-content-hide');
  }
}

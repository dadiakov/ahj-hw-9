/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
export default class Feedback {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    this.element = element;
    this.closeCross = this.element.querySelector('.feedback-close');
    this.form = this.element.querySelector('.feedback-form-container');
    this.feedbackRedButton = this.element.querySelector('.feedback-red-button');
    this.closeCross.addEventListener('click', this.closeForm.bind(this));
    this.feedbackRedButton.addEventListener('click', this.closeRedButton.bind(this));
    document.querySelector('.feedback-form').addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  closeRedButton() {
    this.feedbackRedButton.classList.add('close');
    this.form.classList.remove('close-form');
    this.form.classList.add('not-active');
    setTimeout(() => { this.form.style.opacity = 1; }, 100);
  }

  closeForm() {
    this.feedbackRedButton.classList.remove('close');
    this.form.classList.add('close-form');
    this.form.style.opacity = 0;
    setTimeout(() => {
      this.form.classList.remove('not-active');
    }, 500);
    this.feedbackRedButton.classList.remove('close');
  }
}

export default class Buttons {
  constructor(el) {
    this.buttons = el;
    this.buttons.addEventListener("click", (event) => event);
  }
  async handler() {
    return new Promise((resolve) => {
      this.buttons.onclick = resolve;
    });
  }
}

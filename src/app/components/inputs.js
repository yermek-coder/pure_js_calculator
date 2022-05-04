export default class Input {
  constructor(el) {
    this.field = el;
		this.value = '';
  }
  refresh() {
    this.field.textContent = this.value;
  }
  setValue(value) {
    this.field = value;
    this.refresh();
  }
  setClass(className) {
    if (className === "error") this.field.classes = "input error";
    else this.field.classes = "input";
  }
}

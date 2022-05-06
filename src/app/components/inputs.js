export default class Input {
  constructor(el) {
    this.field = el;
    this.value = "";
  }
  refresh() {
    this.field.textContent = this.value;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.setInitial(false);
    this.value = value;
    this.refresh();
  }
  setBig(bool) {
    if (bool) this.field.classList.add("inp--big");
    else this.field.classList.remove("inp--big");
  }
  setInitial(bool) {
    if (bool) this.field.classList.add("inp--title");
    else this.field.classList.remove("inp--title");
  }
  reset() {
    this.value = "Calculator";
    this.setInitial(true);
    this.refresh();
    this.setBig(true);
  }
}

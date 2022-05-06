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
    if (value === "") {
      this.setBig(false);
      this.setError(false);
    }
    this.value = value;
    this.refresh();
  }
  setError(bool) {
    if (bool) this.field.classList.add("inp--error");
    else this.field.classList.remove("inp--error");
  }
  setBig(bool) {
    if (bool) this.field.classList.add("inp--big");
    else this.field.classList.remove("inp--big");
  }
  reset() {
    this.value = "Calculator"
    this.refresh()
    this.setBig(true);
    this.setError(false);
  }
}

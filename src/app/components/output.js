export default class Output {
  constructor(el) {
    this.field = el;
    this.value = "";
  }
  refresh() {
    this.field.textContent = this.value;
  }
  setValue(value) {
    this.value = value;
    this.refresh();
  }
  setBig(bool) {
    if (bool) this.field.classList.add("out--big");
    else this.field.classList.remove("out--big");
  }
  reset() {
    this.value = "";
    this.refresh();
    this.setBig(false);
  }
}

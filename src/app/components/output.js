export default class Output {
  constructor(el) {
    this.field = el;
    this.value = "";
  }
  refresh() {
    this.field.textContent = this.value;
  }
  setValue(value) {
    if (value.toString().length > 9) {
      this.value = "Limit";
      this.setError(true);
      this.refresh();
      return
    }
    this.value = value;
    this.refresh();
  }
  setBig(bool) {
    if (bool) this.field.classList.add("out--big");
    else this.field.classList.remove("out--big");
  }
  setError(bool) {
    if (bool) this.field.classList.add("inp--error");
    else this.field.classList.remove("inp--error");
  }
  reset() {
    this.value = "";
    this.refresh();
    this.setBig(false);
    this.setError(false);
  }
}

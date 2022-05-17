import Field from "./field";

export default class Output extends Field {
  constructor(el) {
    super(el)
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

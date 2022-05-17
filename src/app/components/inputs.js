import Field from "./field";

export default class Input extends Field {
  constructor(el) {
    super(el)
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

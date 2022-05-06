import "../styles/main.scss";

import InputScreen from "./components/inputs";
import Buttons from "./components/buttons";
import OutputScreen from "./components/output";

document.addEventListener("DOMContentLoaded", () => {
  const inputScreenElement = document.querySelector(".input");
  const htmlButtons = document.querySelector(".buttons");
  const outputScreenElement = document.querySelector(".output");

  const inputClass = new Input(inputScreenElement);
  const btnClass = new Buttons(htmlButtons);
  const outputClass = new Output(outputScreenElement);

  class Calculator {
    constructor(btnClass, inputClass, outputClass) {
      this.btn = btnClass
      this.input = inputClass
      this.output = outputClass
    }
    async listener() {
      const event = await this.btn.handler()
      this.handler(event)
    }
  }
});

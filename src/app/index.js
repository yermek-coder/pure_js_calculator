import "../styles/main.scss";

import InputScreen from "./components/inputs";
import Buttons from "./components/buttons";
import OutputScreen from "./components/output";
import {evaluate} from "mathjs";

document.addEventListener("DOMContentLoaded", () => {
  const inputScreenElement = document.querySelector(".input");
  const htmlButtons = document.querySelector(".buttons");
  const outputScreenElement = document.querySelector(".output");

  const inputClass = new InputScreen(inputScreenElement);
  const btnClass = new Buttons(htmlButtons);
  const outputClass = new OutputScreen(outputScreenElement);

  class Calculator {
    constructor(btnClass, inputClass, outputClass) {
      this.btn = btnClass;
      this.input = inputClass;
      this.output = outputClass;
    }
    async listener() {
      const event = await this.btn.handler();
      this.handler(event);
      this.listener()
    }
    handler(event) {
      if (event.target.className.includes("reset")) {
        this.reset();
        return;
      }
      if (event.target.className.includes("delete")) {
        this.delete();
        return;
      }
      if (event.target.className.includes("equal")) {
        this.solve();
        return;
      }
      this.equation += event.target.dataset.symbol;
      this.input.setValue(this.equation)
    }
    equation = "";
    reset() {
      this.equation = ''
      this.input.reset()
      this.output.reset()
    }
    delete() {
      this.equation = this.equation.slice(-1)
      this.input.setValue(this.equation)
    }
    solve() {
      this.output.setValue(evaluate(this.equation));
    }
  }
  const calc = new Calculator(btnClass, inputClass, outputClass);
  calc.listener()
});

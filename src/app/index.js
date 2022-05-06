import "../styles/main.scss";

import InputScreen from "./components/inputs";
import Buttons from "./components/buttons";
import OutputScreen from "./components/output";
import { evaluate } from "mathjs";

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
      this.listener();
    }
    handler(event) {
      if (event.target.className.includes("reset")) {
        this.reset();
        return;
      }
      if (event.target.className.includes("delete")) {
        if (this.answerIsGiven) {
          this.input.reset();
          this.output.reset();
        }
        this.delete();
        this.answerIsGiven = false;
        return;
      }
      if (event.target.className.includes("equal")) {
        if (this.limiMet) return
        this.solve();
        this.answerIsGiven = true;
        this.output.setBig(true);
        this.input.setBig(false);
        return;
      }
      if (event.target.className === "buttons") return;
      if (this.answerIsGiven) {
        if (
          event.target.className.includes("number") ||
          event.target.className.includes("pariod")
        ) {
          this.reset();
        } else {
          const temp = this.solve();
          this.reset();
          this.equation = temp;
        }
      }
      this.equation += event.target.dataset.symbol;
      this.solve();
      this.input.setValue(this.equation);
    }

    equation = "";
    answerIsGiven = false;
    limiMet = false;

    reset() {
      this.answerIsGiven = false;
      this.equation = "";
      this.input.reset();
      this.output.reset();
    }
    delete() {
      if (this.equation === "") return;
      if (this.limiMet) this.reset()

      this.equation = this.equation.slice(0, -1);
      this.input.setValue(this.equation);
      this.output.setBig(false);
      this.input.setBig(true);
      this.solve();
    }
    solve() {
      try {
        const result = evaluate(this.equation);
        if (!result && result !== 0 && isNaN(result)) {
          this.output.reset();
          this.input.reset();
        }
        this.output.setValue(result);
        this.output.setError(false);
        if (result.toString().length > 9) this.limiMet = true
        return result;
      } catch (error) {
        this.output.setError(true);
      }
    }
  }
  const calc = new Calculator(btnClass, inputClass, outputClass);
  calc.listener();
});

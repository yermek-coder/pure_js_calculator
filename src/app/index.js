import "../styles/main.scss";

import Input from "./components/inputs";
import Buttons from "./components/buttons";
import Output from "./components/output";

const inputs = document.querySelector('input')
const htmlButtons = document.querySelector('buttons')
const ouputElem = document.querySelector('output')

const input = new Input(inputs)
const buttons = new Buttons(htmlButtons)
const output = new Output(outputElem)

///DO MATH


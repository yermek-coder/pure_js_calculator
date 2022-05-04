export default class Buttons {
    constructor(el) {
        this.numbers = el
        el.addEventListener('click', this.handler)
    }
    // this.numbers = 
    // this.plus
    // this.minus
    // this.equal
    // handler(event) {
    //     if (event.target === this.plus) fooOnPlusPress()
    // }
}
export default class Output {
    constructor(el) {
        this.output = el
				this.value = ''
    }
    refresh() {
        this._output.textContent = this.value
    }
    setValue(value) {
        this._value.textContent = value
        this.refresh()
    }
    setClass(className) {
        if (this._output.classes.includes(className)) return
        // if (this._output.classes.includes('big') 
            // && className === 'normal') replace big with normal
    }
    
}
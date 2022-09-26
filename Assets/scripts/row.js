class Row {
    constructor() {
        this.colList = []
        this.rowElement = document.createElement('div')
    }

    renderRowElement() {
        this.rowElement.classList.add('row')
        this.rowElement.style.display = 'flex'
        return this.rowElement
    }

    
}
class Row {
    constructor() {
        this.colList = []
        this.rowElement = document.createElement('div')
    }

    renderRowElement() {
        this.rowElement.classList.add('row')
    // designRowElement() {
    //     this.rowElement.classList.add('row')
    //     this.rowElement.style.display = 'flex'
    }

    renderRowElement() {
        this.rowElement.style.display = 'flex'
        return this.rowElement
    }

    
}
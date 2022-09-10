function findSquareObject(rowList, squareElement) {
    for (let rowIndex = 0 ; rowIndex < 8 ; ++rowIndex) {
        for (let colIndex = 0 ; colIndex < 8 ; ++colIndex) {
            const squareObject = rowList[rowIndex].colList[colIndex]
            if (squareObject.squareElement === squareElement) {
                return squareObject
            }
        }
    }
}
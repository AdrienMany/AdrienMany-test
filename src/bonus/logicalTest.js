function displayNumbersInSnaleOrder(numberOfLines, numberOfColumns) {
    let number = 1;
    const result = [];
    for (let line = 0; line < numberOfLines; line++) {
        result[line] = [];
        for (let col = 0; col < numberOfColumns; col++) {
            if ((line % 2) === 0) {
                result[line].push(number);
            } else {
                result[line].unshift(number);
            }
            number++;
        }
    }
    return result;
}
displayNumbersInSnaleOrder(7, 2);

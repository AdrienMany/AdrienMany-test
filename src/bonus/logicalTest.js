function displayNumbersInSnaleOrder(numberOfLines, numberOfColumns) {
    // SET BASE NUMBER AT 1
    let number = 1;
    const result = [];
    for (let line = 0; line < numberOfLines; line++) {
        // CREATE ARRAY FOR EACH LINE
        result[line] = [];
        for (let col = 0; col < numberOfColumns; col++) {
            // PUSH IN ORDER OR IN REVERSE
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

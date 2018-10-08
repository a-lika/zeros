module.exports = function getZerosCount(number) {
    let i = 5;
    let zero = 0;
    do {
        zero += (number / i);
        zero = Math.floor(zero);
        i *= 5;
    } while (i < number);
    return Math.floor(zero);
};

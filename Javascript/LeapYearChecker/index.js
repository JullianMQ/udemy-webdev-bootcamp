function checkIfLeapYear(year) {
    var isLeapYear;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeapYear = "Leap year.";
                return isLeapYear;
            }
            isLeapYear = "Not leap year.";
            return isLeapYear;
        }
        isLeapYear = "Leap year.";
        return isLeapYear;
    } else {
        isLeapYear = "Not leap year.";
        return isLeapYear;
    }
}
console.log(checkIfLeapYear(1996));
console.log(checkIfLeapYear(1989));
console.log(checkIfLeapYear(1948));
console.log(checkIfLeapYear(2400));
console.log(checkIfLeapYear(2100));

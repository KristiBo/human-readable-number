module.exports = function toReadable(number) {
    const str = number.toString();
    const first = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const second = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const third = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number < 10) return first[str];
    if (number < 20) return second[str];
    if (number < 100 && str[1] === "0") return third[str];
    if (number < 100) return `${third[str[0] + "0"]} ${first[str[1]]}`;
    if (number < 1000 && str[1] === "0" && str[2] === "0") return `${first[str[0]]} hundred`;
    if (number < 1000 && str[1] === "0") return `${first[str[0]]} hundred ${first[str[2]]}`;
    if (number < 1000 && str[1] === "1") return `${first[str[0]]} hundred ${second["1" + str[2]]}`;
    if (number < 1000 && str[2] !== "0") return `${first[str[0]]} hundred ${third[str[1] + "0"]} ${first[str[2]]}`;
    if (number < 1000 && str[2] === "0") return `${first[str[0]]} hundred ${third[str[1] + "0"]}`;
};

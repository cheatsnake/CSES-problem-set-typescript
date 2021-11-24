import read from "../index";

const factorial = (num: number): number | null => {
    if (num < 2) return num < 0 ? null : 1;
    let res: number = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
};

function trailingZeros(num: number) {
    let numStr: string = String(factorial(num));
    let count: number = 0;

    while (numStr.lastIndexOf("0") === numStr.length - 1) {
        numStr = numStr.slice(0, numStr.length - 1);
        count++;
    }

    return count;
}

read.on("line", function (line: string) {
    console.log(trailingZeros(Number(line)));
});

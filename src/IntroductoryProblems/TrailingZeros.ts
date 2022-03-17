import { rl, readConsole } from "../index";

// Solution ---------------------------------------
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
// --------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    console.log(trailingZeros(value));
};

main();

export default trailingZeros;

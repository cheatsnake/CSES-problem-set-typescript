import { rl, readConsole } from "../index";

// Solution ----------------------------------
function weirdAlgorithm(num: number): string {
    let result = num + " ";

    while (num > 1) {
        if (num % 2 == 0) {
            num /= 2;
            result += `${num} `;
        } else {
            num = num * 3 + 1;
            result += `${num} `;
        }
    }

    return result.trim();
}
// ----------------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    console.log(weirdAlgorithm(value));
};

main();

export default weirdAlgorithm;

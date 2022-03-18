import { rl, readConsole } from "../index";

// Solution ----------------------------------------------------
function sumOfTwoValues(sum: number, values: number[]): string {
    const result: number[] = [];
    values.forEach((item, index) => {
        for (let i = index + 1; i < values.length; i++) {
            if (item + values[i] === sum) {
                result.push(++index);
                result.push(++i);
            }
        }
    });
    return result.length ? result.join(" ") : "IMPOSSIBLE";
}
// --------------------------------------------------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    const n = +lines[0].split(" ")[0];
    const x = +lines[0].split(" ")[1];
    const ai = lines[1].split(" ").slice(0, n).map(Number);

    console.log(sumOfTwoValues(x, ai));
};

main();

export default sumOfTwoValues;

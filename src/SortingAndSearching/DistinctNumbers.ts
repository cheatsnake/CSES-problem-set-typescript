import { rl, readConsole } from "../index";

// Solution ----------------------------------------
function distinctNumbers(values: number[]): number {
    const result: number[] = [];
    values.forEach((elem) => {
        if (!result.includes(elem)) result.push(elem);
    });
    return result.length;
}
// ----------------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    const values = lines[1]
        .split(" ")
        .slice(0, +lines[0])
        .map(Number);
    console.log(distinctNumbers(values));
};

main();

export default distinctNumbers;

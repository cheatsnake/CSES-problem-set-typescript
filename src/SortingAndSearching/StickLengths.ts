import { rl, readConsole } from "../index";

// Solution -------------------------------------
function stickLengths(sticks: number[]): number {
    const average: number =
        sticks.reduce((prev, cur) => prev + cur) / sticks.length;
    const checker: number[] = sticks.filter((el) => el > average);

    const totalCounter = (mathFunc: Function): number => {
        let total: number = 0;
        const avg = mathFunc(average);
        sticks.forEach((el) => {
            el >= avg ? (total += el - avg) : (total += avg - el);
        });
        return total;
    };

    return checker.length > sticks.length / 2
        ? totalCounter(Math.ceil)
        : totalCounter(Math.floor);
}
// --------------------------------

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
    console.log(stickLengths(values));
};

main();

export default stickLengths;

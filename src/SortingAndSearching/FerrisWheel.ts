import { rl, readConsole } from "../index";

// Solution -------------------------------------------------
function ferrisWheel(max: number, values: number[]): number {
    const sum: number = values.reduce((prev, current) => prev + current);
    return Math.ceil(sum / max);
}
// ----------------------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    const n = +lines[0].split(" ")[0];
    const x = +lines[0].split(" ")[1];
    const pi = lines[1].split(" ").slice(0, n).map(Number);

    console.log(ferrisWheel(x, pi));
};

main();

export default ferrisWheel;

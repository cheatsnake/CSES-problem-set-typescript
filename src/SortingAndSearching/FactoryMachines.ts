import { rl, readConsole } from "../index";

// Solution ----------------------------------------------------------
function factoryMachines(n: number, t: number, ki: number[]): number {
    let prod: number = 0;
    let time: number = 0;

    while (prod < t) {
        time++;
        prod = ki.reduce((acc, current) => {
            return (acc += Math.floor(time / current));
        }, 0);
    }
    return time;
}
// -------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    const n = +lines[0].split(" ")[0];
    const t = +lines[0].split(" ")[1];
    const ki = lines[1].split(" ").slice(0, n).map(Number);

    console.log(factoryMachines(n, t, ki));
};

main();

export default factoryMachines;

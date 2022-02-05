import read from "../index";

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
// ------------------------------------

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    const n = vals[0];
    const t = vals[1];
    const ki = vals.slice(2);
    console.log(factoryMachines(n, t, ki));
});

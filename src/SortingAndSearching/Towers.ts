import { rl, readConsole } from "../index";

// Solution ----------------------------
function towers(arr: number[]): number {
    const results: number[] = [];

    arr.forEach((elem) => {
        const position = results
            .sort((a, b) => a - b)
            .findIndex((item) => item > elem);

        position === -1 ? results.push(elem) : (results[position] = elem);
    });

    return results.length;
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
    console.log(towers(values));
};

main();

export default towers;

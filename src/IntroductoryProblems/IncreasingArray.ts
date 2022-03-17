import { rl, readConsole } from "../index";

// Solution -------------------------------------
function increasingArray(arr: number[]): number {
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i - 1]) {
            arr[i]++;
            counter++;
        }
    }
    return counter;
}
// ----------------

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
    console.log(increasingArray(values));
};

main();

export default increasingArray;

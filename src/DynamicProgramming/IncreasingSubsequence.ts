import { rl, readConsole } from "../index";

// Solution -------------------------------------------
function increasingSubsequence(arr: number[]): number {
    const results: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (Math.max(...results) >= arr.length - i + 1) break;
        let len = 0;
        let current = 0;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] > current) {
                len++;
                current = arr[j];
            }
        }
        results.push(len);
    }
    return Math.max(...results);
}
// -----------------------------

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
    console.log(increasingSubsequence(values));
};

main();

export default increasingSubsequence;

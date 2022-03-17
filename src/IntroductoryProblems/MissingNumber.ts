import { rl, readConsole } from "../index";

// Solution -------------------------------------
function missingNumber(nums: number[]): number {
    const arr: number[] = nums.sort((a, b) => a - b);
    let counter: number = arr[0];

    for (let num of nums) {
        if (num !== counter) return counter;
        counter++;
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
        .slice(0, +lines[0] - 1)
        .map(Number);
    console.log(missingNumber(values));
};

main();

export default missingNumber;

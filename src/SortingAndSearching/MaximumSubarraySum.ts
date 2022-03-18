import { rl, readConsole } from "../index";

// Solution ----------------------------------------
function maximunSubarraySum(arr: number[]): number {
    const results: number[] = [];

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let sum: number = 0;
            let index: number = j;
            let indexes: number[] = [];

            while (indexes.length != i) {
                if (index >= arr.length) {
                    indexes = [];
                    break;
                }

                indexes.push(index);
                index++;
            }
            indexes.forEach((elem) => {
                sum += arr[elem];
            });

            if (indexes.length) results.push(sum);
        }
    }
    return Math.max(...results);
}
// ----------------------------

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
    console.log(maximunSubarraySum(values));
};

main();

export default maximunSubarraySum;

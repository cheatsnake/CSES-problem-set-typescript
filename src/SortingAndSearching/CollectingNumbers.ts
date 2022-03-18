import { rl, readConsole } from "../index";

// Solution ------------------------------------------
function collectingNumbers(values: number[]): number {
    let count: number = 0;
    const collection: number[] = [0];

    while (collection.length < values.length + 1) {
        values.forEach((el) => {
            el === collection[collection.length - 1] + 1
                ? collection.push(el)
                : null;
        });
        count++;
    }

    return count;
}
// --------------

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
    console.log(collectingNumbers(values));
};

main();

export default collectingNumbers;

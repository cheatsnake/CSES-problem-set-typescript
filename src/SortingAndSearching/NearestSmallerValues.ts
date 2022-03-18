import { rl, readConsole } from "../index";

// Solution ----------------------------------------
function nearestSmallerValues(n: number[]): string {
    const results: number[] = [];

    n.forEach((elem, index) => {
        for (let i = index; i >= 0; i--) {
            if (n[i] < elem) {
                results.push(i + 1);
                break;
            }
            if (i == 0 && n[i] >= elem) {
                results.push(0);
            }
        }
    });

    return results.join(" ");
}
// -------------------------

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
    console.log(nearestSmallerValues(values));
};

main();

export default nearestSmallerValues;

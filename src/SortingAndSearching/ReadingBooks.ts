import { rl, readConsole } from "../index";

// Solution --------------------------------
function readingBooks(t: number[]): number {
    const max: number = Math.max(...t);
    const sum: number = t.reduce((acc, next) => acc + next);
    return max > sum - max ? max * 2 : sum;
}
// ----------------------------------------

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
    console.log(readingBooks(values));
};

main();

export default readingBooks;

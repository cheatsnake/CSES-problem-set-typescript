import read from "../index";

// Solution --------------------------------
function readingBooks(t: number[]): number {
    const max: number = Math.max(...t);
    const sum: number = t.reduce((acc, next) => acc + next);
    return max > sum - max ? max * 2 : sum;
}
// --------------------------------------

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(readingBooks(vals));
});

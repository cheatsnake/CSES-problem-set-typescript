import read from "../index";

// Solution ------------------------------------------
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
// --------------------------------------

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(nearestSmallerValues(vals));
});

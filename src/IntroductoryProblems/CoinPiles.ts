import read from "../index";

// Solution --------------------------------------------
function coinPiles(a: number, b: number): "YES" | "NO" {
    return (a + b) % 3 === 0 && 2 * b >= a && 2 * a >= b ? "YES" : "NO";
}
// --------------------------------------

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(coinPiles(vals[0], vals[1]));
});

export default coinPiles;

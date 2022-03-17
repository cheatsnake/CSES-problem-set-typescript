import { rl, readConsole } from "../index";

// Solution --------------------------------------------
function coinPiles(a: number, b: number): "YES" | "NO" {
    return (a + b) % 3 === 0 && 2 * b >= a && 2 * a >= b ? "YES" : "NO";
}
// --------------------------------------

const main = async () => {
    const count = Number(await readConsole());
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    lines.forEach((line) => {
        const values = line.split(" ").map(Number);
        console.log(coinPiles(values[0], values[1]));
    });
};

main();

export default coinPiles;

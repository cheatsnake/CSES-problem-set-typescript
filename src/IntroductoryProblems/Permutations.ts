import { rl, readConsole } from "../index";

// Solution ------------------------------
function permutations(n: number): string {
    if (n === 1) return "1";
    if (n < 4) return "NO SOLUTION";

    const arr: number[] = [];

    for (let i = 2; i <= n; i += 2) {
        arr.push(i);
    }
    for (let i = 1; i <= n; i += 2) {
        arr.push(i);
    }

    return arr.join(" ");
}
// ----------------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    console.log(permutations(value));
};

main();

export default permutations;

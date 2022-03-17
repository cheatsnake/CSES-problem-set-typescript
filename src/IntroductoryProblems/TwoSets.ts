import { rl, readConsole } from "../index";

// Solution -----------------------
function twoSets(n: number): void {
    const firstSet = [],
        secondSet = [];

    if (n % 4 == 0) {
        for (let i = 1; i <= n / 2; i++) {
            if (i % 2 != 0) {
                firstSet.push(i);
                firstSet.push(n - i + 1);
            } else {
                secondSet.push(i);
                secondSet.push(n - i + 1);
            }
        }
    } else if (n % 4 == 3) {
        for (let i = 1; i <= Math.round(n / 2); i++) {
            if (firstSet.length < Math.floor(n / 2)) {
                firstSet.push(n - i + 1);
                if (firstSet.length < Math.floor(n / 2)) {
                    firstSet.push(i);
                } else {
                    secondSet.push(i);
                }
            } else {
                secondSet.push(n - i + 1);
                secondSet.push(i);
            }
        }
        secondSet.pop();
    } else {
        console.log("NO");
        return;
    }

    console.log("YES");
    console.log(firstSet.length);
    console.log(...firstSet);
    console.log(secondSet.length);
    console.log(...secondSet);
}
// ------------------------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    twoSets(value);
};

main();

export default twoSets;

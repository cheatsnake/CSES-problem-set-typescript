import { rl, readConsole } from "../index";

// Solution ------------------------------------------------------
function sumOfThreeValues(sum: number, values: number[]): string {
    const result: number[][] = [];
    const maxIndex: number = values.length - 1;
    const numberOfValues: number = 3;
    const allCombinations: string[] = [];
    const mask: number[] = [];
    let finish: boolean = false;

    for (let i = 0; i < numberOfValues; i++) mask.push(values[i]);

    while (!finish) {
        finish = true;
        const str: string = mask.join(" ");
        if (!allCombinations.includes(str)) allCombinations.push(str);
        for (let i = 0; i < numberOfValues; i++) {
            if (mask[numberOfValues - 1 - i] != values[maxIndex - i]) {
                finish = false;
                let p = values.indexOf(mask[numberOfValues - 1 - i]);
                mask[numberOfValues - 1 - i] = values[++p];
                for (
                    let j = numberOfValues - 1 - i + 1;
                    j < numberOfValues;
                    j++
                ) {
                    mask[j] = values[++p];
                }
                break;
            }
        }
    }
    allCombinations.forEach((combination) => {
        const nums = combination.split(" ").map(Number);
        if (nums.reduce((acc, num) => acc + num) === sum) {
            result.push(nums);
        }
    });

    return result.length ? `${result[0].join(" ")}` : "IMPOSSIBLE";
}
// ----------------------------------------------------------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    const n = +lines[0].split(" ")[0];
    const x = +lines[0].split(" ")[1];
    const ai = lines[1].split(" ").slice(0, n).map(Number);

    console.log(sumOfThreeValues(x, ai));
};

main();

export default sumOfThreeValues;

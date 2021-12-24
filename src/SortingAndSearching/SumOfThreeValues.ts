import read from "../index";

console.log(
    "Input: 1st number -> target sum, all next numbers -> array of values"
);

function sumOfThreeValues(values: number[], sum: number): string {
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

read.on("line", function (line: string) {
    const sum: number = line.split(" ").map(Number)[0];
    const vals: number[] = line.split(" ").map(Number).slice(1);
    console.log(sumOfThreeValues(vals, sum));
});

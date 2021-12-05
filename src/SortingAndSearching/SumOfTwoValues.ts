import read from "../index";

console.log(
    "The first number is the required sum, all subsequent numbers will be included in the array among which the sum will be searched."
);

function sumOfTwoValues(sum: number, values: number[]): string {
    const result: number[] = [];
    values.forEach((item, index) => {
        for (let i = index + 1; i < values.length; i++) {
            if (item + values[i] === sum) {
                result.push(++index);
                result.push(++i);
            }
        }
    });
    return result.length ? result.join(" ") : "IMPOSSIBLE";
}

read.on("line", function (line: string) {
    const sum = Number(line.split(" ")[0]);
    const vals: number[] = line.slice(2).split(" ").map(Number);
    console.log(sumOfTwoValues(sum, vals));
});

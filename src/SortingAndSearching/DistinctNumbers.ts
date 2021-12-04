import read from "../index";

function distinctNumbers(values: number[]): number {
    const result: number[] = [];
    values.forEach((elem) => {
        if (!result.includes(elem)) result.push(elem);
    });
    return result.length;
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(distinctNumbers(vals));
});

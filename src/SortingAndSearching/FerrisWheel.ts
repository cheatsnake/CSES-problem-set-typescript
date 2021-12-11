import read from "../index";

console.log(
    "The first number is the maximum weight, all next numbers are the weight of each individual child."
);

function ferrisWheel(max: number, values: number[]): number {
    const sum: number = values.reduce((prev, current) => prev + current);
    return Math.ceil(sum / max);
}

read.on("line", function (line: string) {
    const max: number = Number(line.split(" ")[0]);
    const vals: number[] = line.slice(2).split(" ").map(Number);
    console.log(ferrisWheel(max, vals));
});

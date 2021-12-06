import read from "../index";

function stickLengths(sticks: number[]): number {
    const average: number =
        sticks.reduce((prev, cur) => prev + cur) / sticks.length;
    const checker: number[] = sticks.filter((el) => el > average);

    const totalCounter = (mathFunc: Function): number => {
        let total: number = 0;
        const avg = mathFunc(average);
        sticks.forEach((el) => {
            el >= avg ? (total += el - avg) : (total += avg - el);
        });
        return total;
    };

    return checker.length > sticks.length / 2
        ? totalCounter(Math.ceil)
        : totalCounter(Math.floor);
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(stickLengths(vals));
});

import read from "../index";

function collectingNumbers(values: number[]): number {
    let count: number = 0;
    const collection: number[] = [0];

    while (collection.length < values.length + 1) {
        values.forEach((el) => {
            el === collection[collection.length - 1] + 1
                ? collection.push(el)
                : null;
        });
        count++;
    }

    return count;
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(collectingNumbers(vals));
});

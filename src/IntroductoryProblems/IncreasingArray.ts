import read from "../index";

function increasingArray(arr: number[]): number {
    let counter = 0;
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i - 1]) {
            arr[i]++;
            counter++;
        }
    }
    return counter;
}

read.on("line", function (line: string) {
    const vals = line.split(" ").map(Number);
    console.log(increasingArray(vals));
});

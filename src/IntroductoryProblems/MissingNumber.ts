import read from "../index";

function missingNumber(nums: number[]): number {
    const arr: number[] = nums.sort((a, b) => a - b);
    let counter: number = arr[0];

    for (let num of nums) {
        if (num !== counter) return counter;
        counter++;
    }
    return counter;
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(missingNumber(vals));
});

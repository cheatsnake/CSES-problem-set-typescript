import read from "../index";

function weirdAlgorithm(num: number): void {
    const isEven = (x: number): boolean => x % 2 === 0;

    while (num > 1) {
        console.log(num);
        if (isEven(num)) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
    }
}

read.on("line", function (line: string) {
    const vals = line.split(" ");
    weirdAlgorithm(+vals[0]);
});

import read from "../index";

function removingDigits(value: number): number {
    let counter: number = 0;
    let current: string = value.toString();

    while (Number(current) !== 0) {
        const arrayOfDigits: number[] = current.split("").map(Number);
        const maxDigit: number = Math.max(...arrayOfDigits);

        current = (Number(current) - maxDigit).toString();
        counter++;
    }

    return counter;
}

read.on("line", function (line: string) {
    const value: number = line.split(" ").map(Number)[0];
    console.log(removingDigits(value));
});

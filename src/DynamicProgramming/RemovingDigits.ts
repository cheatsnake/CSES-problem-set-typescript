import { rl, readConsole } from "../index";

// Solution ------------------------------------
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
// ----------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    console.log(removingDigits(value));
};

main();

export default removingDigits;

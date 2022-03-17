import { rl, readConsole } from "../index";

// Solution ---------------------------------
function numberSpiral(y: number, x: number) {
    if (y > x) {
        return y % 2 === 0 ? y * y - x + 1 : y * y - (y + y - 1) + x;
    } else {
        return x % 2 == 0 ? x * x - (x + x - 1) + y : x * x - y + 1;
    }
}
// ------------------------------------------

const main = async () => {
    const count = Number(await readConsole());
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    lines.forEach((line) => {
        const values = line.split(" ").map(Number);
        console.log(numberSpiral(values[0], values[1]));
    });
};

main();

export default numberSpiral;

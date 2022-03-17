import { rl, readConsole } from "../index";

// Solution --------------------------------------------------------
function editDistance(firstStr: string, secondStr: string): number {
    let diff: number = 0;
    const chars = secondStr.split("");

    firstStr.split("").forEach((elem) => {
        if (!chars.includes(elem)) diff++;
    });

    diff += Math.abs(secondStr.length - firstStr.length);
    return diff;
}
// ------------------------------------------------------

const main = async () => {
    let count = 2;
    const lines: string[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(await readConsole());
    }
    rl.close();

    console.log(editDistance(lines[0], lines[1]));
};

main();

export default editDistance;

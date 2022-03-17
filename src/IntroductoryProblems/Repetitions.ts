import { rl, readConsole } from "../index";

// Solution ------------------------------
function repetitions(str: string): number {
    const chars: string[] = ["A", "C", "G", "T"];
    const arr: number[] = [];

    chars.forEach((char) => arr.push(str.split(char).length - 1));

    return Math.max(...arr);
}
// -------------------------

const main = async () => {
    const value = await readConsole();
    rl.close();
    console.log(repetitions(value));
};

main();

export default repetitions;

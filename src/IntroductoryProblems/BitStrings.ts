import { rl, readConsole } from "../index";

// Solution ------------------------------------------------------
const bitStrings = (bitLen: number): number => Math.pow(2, bitLen);
// --------------------------------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    console.log(bitStrings(value));
};

main();

export default bitStrings;

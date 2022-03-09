import read from "../index";

// Solution ------------------------------------------------------
const bitStrings = (bitLen: number): number => Math.pow(2, bitLen);
// --------------------------------------

read.question("", (line: string) => {
    const n = Number(line);
    console.log(bitStrings(n));
    read.close();
});

export default bitStrings;

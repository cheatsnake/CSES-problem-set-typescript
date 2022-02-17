import read from "../index";

// Solution ------------------------------------------------------
const bitString = (bitLen: number): number => Math.pow(2, bitLen);
// --------------------------------------

read.on("line", function (line: string) {
    const int = Number(line);
    console.log(bitString(int));
});

export default bitString;

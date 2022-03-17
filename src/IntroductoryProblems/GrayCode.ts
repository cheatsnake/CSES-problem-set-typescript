import { rl, readConsole } from "../index";

// Solution ------------------------
function grayCode(n: number): void {
    const max = Math.pow(2, n);
    for (let i = 0; i < max; i++) {
        console.log(i.toString(2).padStart(n, "0"));
    }
}
// ---------------------------------

const main = async () => {
    const value = Number(await readConsole());
    rl.close();
    grayCode(value);
};

main();

export default grayCode;

import read from "../index";

function grayCode(n: number): void {
    const max = Math.pow(2, n);
    for (let i = 0; i < max; i++) {
        console.log(i.toString(2).padStart(n, "0"));
    }
}

read.on("line", function (line: string) {
    const int = Number(line);
    grayCode(int);
});

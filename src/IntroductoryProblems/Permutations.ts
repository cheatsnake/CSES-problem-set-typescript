import read from "../index";

function permutations(n: number): string {
    if (n === 1) return "1";
    if (n < 4) return "NO SOLUTION";

    const arr: number[] = [];

    for (let i = 2; i <= n; i += 2) {
        arr.push(i);
    }
    for (let i = 1; i <= n; i += 2) {
        arr.push(i);
    }

    return arr.join(" ");
}

read.on("line", function (line: string) {
    const int = Number(line);
    console.log(permutations(int));
});

import read from "../index";

function repetitions(str: string): number {
    const chars: string[] = ["A", "C", "G", "T"];
    const arr: number[] = [];

    chars.forEach((char) => arr.push(str.split(char).length - 1));

    return Math.max(...arr);
}

read.on("line", function (line: string) {
    console.log(repetitions(line));
});

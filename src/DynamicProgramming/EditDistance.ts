import read from "../index";

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
// --------------------------------------

read.on("line", function (line: string) {
    const vals: string[] = line.split(" ");
    console.log(editDistance(vals[0], vals[1]));
});

export default editDistance;

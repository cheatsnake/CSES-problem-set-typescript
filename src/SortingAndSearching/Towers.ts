import read from "../index";

function towers(arr: number[]): number {
    const results: number[] = [];

    arr.forEach(elem => {
        const position = results
            .sort((a, b) => a - b)
            .findIndex(item => item > elem);

        position === -1 
            ? results.push(elem)
            : results[position] = elem
    })

    return results.length
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(towers(vals));
});
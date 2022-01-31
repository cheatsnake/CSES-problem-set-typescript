import read from "../index";

function playlist(arr: number[]) {
    const results: number[][] = [];

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let seq: number[] = [];
            let index: number = j;
            let indexes: number[] = [];

            while (indexes.length < i) {
                if (index >= arr.length) {
                    indexes = [];
                    break;
                }
                indexes.push(index);
                index++;
            }

            if (indexes.length) {
                for (let k = 0; k < indexes.length; k++) {
                    if (seq.includes(arr[indexes[k]])) {
                        seq = [];
                        break;
                    }
                    seq.push(arr[indexes[k]]);
                }
                if (seq.length) results.push(seq);
            }
        }
    }
    return results.reduce((prev: number, current: number[]) => 
        prev < current.length ? prev = current.length : prev, 0);
}

read.on("line", function (line: string) {
    const vals: number[] = line.split(" ").map(Number);
    console.log(playlist(vals));
});

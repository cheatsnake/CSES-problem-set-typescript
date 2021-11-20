import readline from "readline";

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

export default read;

// r.on("line", function (line: any) {
//     let vals = line.split(" ");
//     console.log(parseInt(vals[0]) + parseInt(vals[1]));
// });

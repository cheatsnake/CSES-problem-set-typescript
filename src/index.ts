import readline from "readline";

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

export default read;

import readline from "readline";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

export const readConsole = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            rl.question("", (result) => resolve(result));
        } catch {
            reject("No data");
        }
    });
};

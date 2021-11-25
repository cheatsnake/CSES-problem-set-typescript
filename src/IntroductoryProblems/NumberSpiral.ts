import read from "../index";

function numberSpiral(y: number, x: number) {
    if (y > x) {
        return y % 2 === 0 
            ? y * y - x + 1 
            : y * y - (y + y - 1) + x;
    } else {
        return x % 2 == 0 
            ? x * x - (x + x - 1) + y 
            : x * x - y + 1;
    }
}

read.on("line", function (line: string) {
    const vals = line.split(" ");
    console.log(numberSpiral(+vals[0], +vals[1]));
});
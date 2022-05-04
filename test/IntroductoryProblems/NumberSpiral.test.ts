import numberSpiral from "../../src/IntroductoryProblems/NumberSpiral";

describe("Number Spiral", () => {
    test("Input: 2 3 Output: 8", () => {
        expect(numberSpiral(2, 3)).toBe(8);
    });
    test("Input: 1 1 Output: 1", () => {
        expect(numberSpiral(1, 1)).toBe(1);
    });
    test("Input: 4 2 Output: 15", () => {
        expect(numberSpiral(4, 2)).toBe(15);
    });
});

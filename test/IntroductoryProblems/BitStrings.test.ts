import bitStrings from "../../src/IntroductoryProblems/BitStrings";

describe("Bit Strings", () => {
    test("Input: 3 Output: 8", () => {
        expect(bitStrings(3)).toBe(8);
    });

    test("Input: 4 Output: 16", () => {
        expect(bitStrings(4)).toBe(16);
    });

    test("Input: 8 Output: 256", () => {
        expect(bitStrings(8)).toBe(256);
    });
});

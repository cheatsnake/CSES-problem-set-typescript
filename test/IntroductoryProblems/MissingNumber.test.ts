import missingNumber from "../../src/IntroductoryProblems/MissingNumber";

describe("Coin Piles", () => {
    test("Input: 2 3 1 5 Output: 4", () => {
        expect(missingNumber([2, 3, 1, 5])).toBe(4);
    });
    test("Input: 3 2 Output: 1", () => {
        expect(missingNumber([3, 2])).toBe(1);
    });
    test("Input: 4 1 3 Output: 2", () => {
        expect(missingNumber([4, 1, 3])).toBe(2);
    });
});

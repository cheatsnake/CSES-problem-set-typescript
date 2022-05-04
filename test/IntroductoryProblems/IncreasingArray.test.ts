import increasingArray from "../../src/IntroductoryProblems/IncreasingArray";

describe("Increasing Array", () => {
    test("Input: 3 2 5 1 7 Output: 5", () => {
        expect(increasingArray([3, 2, 5, 1, 7])).toBe(5);
    });
    test("Input: 1 2 3 4 5 Output: 0", () => {
        expect(increasingArray([1, 2, 3, 4, 5])).toBe(0);
    });
    test("Input: 5 4 3 2 1 Output: 10", () => {
        expect(increasingArray([5, 4, 3, 2, 1])).toBe(10);
    });
});

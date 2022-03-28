import increasingSubsequence from "../../src/DynamicProgramming/IncreasingSubsequence";

describe("Increasing Subsequence", () => {
    test("Input: 7 3 5 3 6 2 9 8 Output: 4", () => {
        expect(increasingSubsequence([7, 3, 5, 3, 6, 2, 9, 8])).toBe(4);
    });

    test("Input: 1 2 3 4 5 Output: 5", () => {
        expect(increasingSubsequence([1, 2, 3, 4, 5])).toBe(5);
    });

    test("Input: 5 4 3 2 1 Output: 1", () => {
        expect(increasingSubsequence([5, 4, 3, 2, 1])).toBe(1);
    });
});

import permutations from "../../src/IntroductoryProblems/Permutations";

describe("Permutations", () => {
    test("Input: 5 Output: 2 4 1 3 5", () => {
        expect(permutations(5)).toBe("2 4 1 3 5");
    });
    test("Input: 3 Output: NO SOLUTION", () => {
        expect(permutations(3)).toBe("NO SOLUTION");
    });
    test("Input: 12 Output: 2 4 6 8 10 12 1 3 5 7 9 11", () => {
        expect(permutations(12)).toBe("2 4 6 8 10 12 1 3 5 7 9 11");
    });
});

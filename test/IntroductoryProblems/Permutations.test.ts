import permutations from "../../src/IntroductoryProblems/Permutations";

describe("Permutations", () => {
    test("Input: 5", () => {
        expect(permutations(5)).toBe("2 4 1 3 5");
    });
    test("Input: 3", () => {
        expect(permutations(3)).toBe("NO SOLUTION");
    });
    test("Input: 9", () => {
        expect(permutations(9)).toBe("2 4 6 8 1 3 5 7 9");
    });
});

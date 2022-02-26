import editDistance from "../../src/DynamicProgramming/EditDistance";

describe("Edit Distance", () => {
    test("Input: LOVE MOVIE Output: 2", () => {
        expect(editDistance("LOVE", "MOVIE")).toBe(2);
    });

    test("Input: MAKE CAKE Output: 1", () => {
        expect(editDistance("MAKE", "CAKE")).toBe(1);
    });

    test("Input: HOME WORLD Output: 4", () => {
        expect(editDistance("HOME", "WORLD")).toBe(4);
    });
});

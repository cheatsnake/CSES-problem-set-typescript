import coinPiles from "../../src/IntroductoryProblems/CoinPiles";

describe("Coin Piles", () => {
    test("Input: 2 1 Output: YES", () => {
        expect(coinPiles(1, 2)).toBe("YES");
    });
    test("Input: 2 2 Output: NO", () => {
        expect(coinPiles(2, 2)).toBe("NO");
    });
    test("Input: 3 3 Output: YES", () => {
        expect(coinPiles(3, 3)).toBe("YES");
    });
});

import removingDigits from "../../src/DynamicProgramming/RemovingDigits";

describe("Removing Digits", () => {
    test("Input: 27 Output: 5", () => {
        expect(removingDigits(27)).toBe(5);
    });

    test("Input: 100 Output: 17", () => {
        expect(removingDigits(100)).toBe(17);
    });

    test("Input: 9 Output: 1", () => {
        expect(removingDigits(9)).toBe(1);
    });
});

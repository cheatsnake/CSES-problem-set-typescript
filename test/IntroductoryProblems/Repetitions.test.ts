import repetitions from "../../src/IntroductoryProblems/Repetitions";

describe("Repetitions", () => {
    test("Input: ATTCGGGA", () => {
        expect(repetitions("ATTCGGGA")).toBe(3);
    });
    test("Input: ACCGGGTTTT", () => {
        expect(repetitions("ACCGGGTTTT")).toBe(4);
    });
    test("Input: ACCCCCCCT", () => {
        expect(repetitions("ACCCCCCCT")).toBe(7);
    });
});

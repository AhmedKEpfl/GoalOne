import setImmutable from "./setImmutable.js";

describe("setImmutable tests", () => {
    test("Works well on basic example", () => {
        const example = [
            { a: 2, b: 6 },
            { a: 5, b: 4 },
            { a: 2, b: 9 }
        ];

        const expected = [
            example[0],
            { ...example[1], c: 4 },
            example[2]
        ];

        const actual = setImmutable(example, 1, { c: 4 });
        expect(actual).toEqual(expected);
    })
})

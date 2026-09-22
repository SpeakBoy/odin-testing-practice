import capitalize from "./capitalize";

test('"word" is returned capitalized', () => {
    expect(capitalize("word")).toBe("Word");
})
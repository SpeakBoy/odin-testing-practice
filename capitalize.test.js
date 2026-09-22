import capitalize from "./capitalize";

test('"word" is returned capitalized', () => {
    expect(capitalize("word")).toBe("Word");
});

test('"apple" is returned capitalized', () => {
    expect(capitalize("apple")).toBe("Apple");
});

test('"johnny" is returned capitalized', () => {
    expect(capitalize("johnny")).toBe("Johnny");
});

test('"" returns ""', () => {
    expect(capitalize("")).toBe("");
});

test('"a" returns "A"', () => {
    expect(capitalize("a")).toBe("A");
});

test('"1" returns "1"', () => {
    expect(capitalize("1")).toBe("1");
});

test('"ABBA" returns "ABBA"', () => {
    expect(capitalize("ABBA")).toBe("ABBA");
});
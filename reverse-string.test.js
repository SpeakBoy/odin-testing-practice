import reverseString from "./reverse-string";

test('"acro" returns "orca"', () => {
    expect(reverseString("acro")).toBe("orca");
});

test('"racecar" returns "racecar"', () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test('"i looooveeee you" returns "uoy eeeevooool i"', () => {
    expect(reverseString("i looooveeee you")).toBe("uoy eeeevooool i");
});

test('"" returns ""', () => {
    expect(reverseString("")).toBe("");
});

test('"a" returns "a"', () => {
    expect(reverseString("a")).toBe("a");
});
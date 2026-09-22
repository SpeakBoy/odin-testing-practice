import caesarCipher from "./caesar-cipher";

test('"abcdef, 3" returns "defghi"', () => {
    expect(caesarCipher("abcdef", 3)).toBe("defghi");
});

test('"xyz, 3" returns "abc"', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('"xyz, -3" returns "uvw"', () => {
    expect(caesarCipher("xyz", -3)).toBe("uvw");
});

test('"xyz, 29" returns "abc"', () => {
    expect(caesarCipher("xyz", 29)).toBe("abc");
});

test('"HeLLo, 3" returns "KhOOr', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('"Hello, World!, 3" returns "Khoor, Zroug!', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
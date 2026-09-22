import Calculator from "./calculator";

test('"calculator exists"', () => {
    expect(new Calculator()).toBeInstanceOf(Calculator);
});

test('1 + 2 equals 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
});

test('5 + 23 equals 28', () => {
    expect(Calculator.add(5, 23)).toBe(28);
});

test('5 + 23 + 14 equals 42', () => {
    expect(Calculator.add(Calculator.add(5, 23), 14)).toBe(42);
});

test('5 + (-5) equals 0', () => {
    expect(Calculator.add(5, -5)).toBe(0);
});

test('5 + 0 equals 5', () => {
    expect(Calculator.add(5, 0)).toBe(5);
});

test('15 - 5 equals 10', () => {
    expect(Calculator.subtract(15, 5)).toBe(10);
});

test('45 - 23 equals 22', () => {
    expect(Calculator.subtract(45, 23)).toBe(22);
});

test('45 - 20 equals 25', () => {
    expect(Calculator.subtract(45, 20)).toBe(25);
});

test('-5 - (-10) equals 5', () => {
    expect(Calculator.subtract(-5, -10)).toBe(5);
});

test('-5 - (-10 - 4) equals 9', () => {
    expect(Calculator.subtract(-5, Calculator.subtract(-10, 4))).toBe(9);
});

test('1 * 25 equals 25', () => {
    expect(Calculator.multiply(1, 25)).toBe(25);
});

test('-1 * 25 equals -25', () => {
    expect(Calculator.multiply(-1, 25)).toBe(-25);
});

test('0 * 4 equals 0', () => {
    expect(Calculator.multiply(0, 4)).toBe(0);
});

test('15 * 22 equals 330', () => {
    expect(Calculator.multiply(15, 22)).toBe(330);
});

test('30 * (4 * 5) equals 600', () => {
    expect(Calculator.multiply(30, Calculator.multiply(4, 5))).toBe(600);
});

test('67 / 1 equals 67', () => {
    expect(Calculator.divide(67, 1)).toBe(67);
});

test('69 / 3 equals 23', () => {
    expect(Calculator.divide(69, 3)).toBe(23);
});

test('(16 / 2) / 2 equals 4', () => {
    expect(Calculator.divide(Calculator.divide(16, 2), 2)).toBe(4);
});

test('1 / 0 equals Infinity', () => {
    expect(Calculator.divide(1, 0)).toBe(Infinity);
});

test('-1 / 0 equals -Infinity', () => {
    expect(Calculator.divide(-1, 0)).toBe(-Infinity);
});

test('0 / 0 equals NaN', () => {
    expect(Calculator.divide(0, 0)).toBe(NaN);
});
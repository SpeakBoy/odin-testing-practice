import analyzeArray from "./analyze-array";

test("average is returned", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test("average is correct", () => {
    expect(analyzeArray([5,5,5,5,5]).average).toBe(5);
});

test("min is returned", () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test("min is correct", () => {
    expect(analyzeArray([5,5,5,5,5]).min).toBe(5);
});

test("max is returned", () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test("max is correct", () => {
    expect(analyzeArray([5,5,5,5,5]).max).toBe(5);
});

test("length is returned", () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

test("length is correct", () => {
    expect(analyzeArray([5,5,5,5,5]).length).toBe(5);
});

test("object returned is equal", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
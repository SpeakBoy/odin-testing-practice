function analyzeArray(arr) {
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    let length = 0;
    
    for (const num of arr) {
        total += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        length++;
    }
    const average = total / length;

    return {
        average,
        min,
        max,
        length
    };
}

export default analyzeArray;
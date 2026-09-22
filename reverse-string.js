function reverseString(str) {
    let reversedString = "";
    for (const c of str)
    {
        reversedString = c + reversedString;
    }
    return reversedString;
}

export default reverseString;
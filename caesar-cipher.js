function caesarCipher(str, shift) {
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    cipheredStr = "";
    for (const ch of str) {
        if (lowerCaseLetters.includes(ch.toLowerCase())) {
            const chCode = lowerCaseLetters.indexOf(ch.toLowerCase());
            const shiftedCh = lowerCaseLetters.at((chCode + shift) % 26);
            if (ch === ch.toUpperCase()) {
                cipheredStr += shiftedCh.toUpperCase();
            }
            else {
                cipheredStr += shiftedCh;
            }
        }
        else {
            cipheredStr += ch;
        }
    }
    return cipheredStr;
}

export default caesarCipher;
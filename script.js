function firstNonRepeatedChar(str) {
  const freq = {};

    // 1. Build frequency map
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // 2. Find the first char with freq 1
    for (let ch of str) {
        if (freq[ch] === 1) return ch;
    }

    return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

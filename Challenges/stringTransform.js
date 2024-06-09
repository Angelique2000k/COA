function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Perform both operations
        // Step 1: Reverse the string
        str = str.split('').reverse().join('');
        // Step 2: Replace each character with its ASCII code
        str = str.split('').map(char => char.charCodeAt(0)).join('');
    } else if (length % 3 === 0) {
        // Reverse the entire string
        str = str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        str = str.split('').map(char => char.charCodeAt(0)).join('');
    }

    return str;
}

const inputString = "HelloWorld";
const transformedString = transformString(inputString);
console.log(transformedString);

"use strict";
/**
 * @description The wildcard dictionary implementation will be given a list of string.
 * And you will need to write a funciton to find out if the user input is inside the
 * dictionary.
 * This implementation is an extended feature for question `Simple Dictionary`
 *
 * input: 'cat', 'car', 'bar'
 *
 * function setup(input: string[])
 * function isInDict(word: string)
 *
 * setup(['cat', 'car', 'bar'])
 * isInDict('cat') // true
 * isInDict('bat') // false
 *
 * WildCard
 * isInDict('*at') // true
 * isInDict('cr*') // false
 */
class WildCardDictionaryImpl {
    constructor() {
        this.dictionarySet = new Set();
    }
    // Initialize the dictionary with a list of words
    setup(input) {
        input.forEach((element) => {
            if (typeof element === "string") {
                this.dictionarySet.add(element);
            }
        });
    }
    isInDict(word) {
        if (typeof word === "string") {
            // Replace * with .* for regex
            const regexPattern = word.replace(/\*/g, ".*");
            const regex = new RegExp(`^${regexPattern}$`, "i");
            // Check if any word in the dictionary matches the regex
            for (const dictWord of this.dictionarySet) {
                if (regex.test(dictWord)) {
                    return true;
                }
            }
        }
        return false;
    }
}
// Example usage
const wildcardDict = new WildCardDictionaryImpl();
wildcardDict.setup(["cat", "car", "bar", "hello,word!"]);
console.log(`isIndict("cat"): ${wildcardDict.isInDict("cat")}`); // true
console.log(`isIndict("bat"): ${wildcardDict.isInDict("bat")}`); // false
console.log(`isIndict("*at"): ${wildcardDict.isInDict("*at")}`); // true
console.log(`isIndict("cr*"): ${wildcardDict.isInDict("cr*")}`); // false
console.log(`isIndict("Hello,*wor*"): ${wildcardDict.isInDict("Hello,*wor*")}`); // true
console.log(`isIndict("Hello,wo*d"): ${wildcardDict.isInDict("Hello,wo*d")}`); // false

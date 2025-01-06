"use strict";
class DictionaryImpl {
    constructor() {
        this.dictionarySet = new Set();
    }
    setup(input) {
        input.forEach((element) => {
            if (typeof element === "string") {
                this.dictionarySet.add(element);
            }
        });
    }
    isInDict(word) {
        return this.dictionarySet.has(word);
    }
}
let dict = new DictionaryImpl();
dict.setup(["cat", "car", "bar"]);
console.log(dict.isInDict("dict"));
console.log(dict.isInDict("cat"));

/**
* @description The dictionary implementation will be given a list of string.
* And you will need to write a funciton to find out if the user input is inside the
dictionary.
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
*/
interface Dictionary {
  isInDict(word: string): boolean;
}

class DictionaryImpl implements Dictionary {
  private readonly dictionarySet: Set<string>;

  constructor() {
    this.dictionarySet = new Set<string>();
  }

  setup(input: string[]): void {
    input.forEach((element) => {
      if (typeof element === "string") {
        this.dictionarySet.add(element);
      }
    });
  }

  isInDict(word: string): boolean {
    return this.dictionarySet.has(word);
  }
}

let dict = new DictionaryImpl();
dict.setup(["cat", "car", "bar"]);
console.log(dict.isInDict("dict"));
console.log(dict.isInDict("cat"));

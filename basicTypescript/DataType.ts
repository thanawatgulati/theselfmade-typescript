// boolean
const isLoading: boolean = true;

// number
const decimal: number = 6;
const hex: number = 0xa00c;
const binary: number = 0b100110;
const octal: number = 0o375;

// String
let word: string = "Hello Typescript";
word = "Hello World";

// any
let anyType: any = "Hello";
anyType = 9;
anyType = true;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: (string | number)[] = ["James", 2, 3];

// tuple

let mytuples: [string, number] = ["James", 2];
mytuples[0].substring(1);
// mytuples[1].substring(1); -> Error

// Enum

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;
console.log(c);

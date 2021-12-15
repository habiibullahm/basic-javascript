## add

```sh
const money = 1 + 3
console.log(money)
```
result : 4

## subtract

```sh
const cash = 10 - 1
console.log(cash)
```

result : 9

## multiply

```sh
const height = 2 * 2
console.log(height)
```

result : 4

## remainder (modulo)
```sh
const remainder = 11 % 3 ;
console.log(remainder);
```
result : 2 

## Compound Assignment With Augmented Addition
```sh
let a = 35;
let b = 11;
let c = 4;

a += 2;
b += 5;
c += 9;
```
result :
a : 37
b : 16
c : 13

## Compound Assignment With Augmented subtraction
```sh
let a = 1;
let b = 5;
let c = 2;

// Only change code below this line
a -= 1;
b -= 4;
c -= 2;
```
result :
a : 0
b : 1
c : 0
## Compound Assignment With Augmented Multiplication
```sh
let a = 5;
let b = 2;
let c = 2;

a *= 2;
b *= 6;
c *= 20;
```
result : 
a : 10
b : 12
c : 40
## Compound Assignment With Augmented Division
```sh
let a = 9;
let b = 6;
let c = 3;

a /= 3;
b /= 2;
c /= 1;
```

result : 
a : 3
b : 3
c : 3

## Escaping Literal Quotes in Strings
```sh
const myStr = "I am a \"double quoted\" string inside \"double qoutes\"."; 
```

result : myStr = "I am a "double quoted" string inside "double qoutes"."

## Quoting Strings with Single Quotes
```sh
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
## ! String template 
```sh
let myName : "habib";
console.log(`${myName} belajar di glints academy`;
```
result : habib belajar di glints academy

## parseInt

```sh
console.log(parseInt("100.1"));
```

result : 100
         
## parseFloat

```sh
console.log(parseFloat("100.1));
```

result : 100,1

## string data type

```sh
let myName = "Habib";
console.log(typeof myName);
```

result : string

## number data type

```sh
let  money = 100;
console.log(typeof money);
```
result : number

## boolean data type

```sh
let aku sedang bekerja = false ;
console.log(typeof aku sedang bekerja);
```

result : boolean

## NaN

```sh
let myJob = Number('ngooding11');
console.log(myJob);
```

result : NaN

## isNaN

```sh
console.log(isNaN(5));
```

result : False (Karna 5 adalah angka)

## Ternary Operator

```sh
const score = "C";
const hasil = score === "A" ? 'Cie dapat A' : 'Gapapa deh ;('
console.log(hasil);
```

result : Gapapa deh ;( 

## Concat with plus operator

```sh
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);
```

## append to string
```sh
const someAdjective = "Fun, Interesting, Boring";
let myStr = "Learning to code is ";
myStr += someAdjective
```

## Find the Length of a String

```sh
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```

## Find the First Character
```sh
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 
```

result : L 

## Find the Last Character

```sh
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; 
```

result : e

## World Blanks

```sh
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " "+ myAdverb;
```

## Nested array

```sh
const myArray = [["habib", 23], ["unis", 20]];
```

## access array data

```sh
const myArray = [50, 60, 70];
let myData = myArray[myArray.length-1];
```

## modify array data with indexes
```sh
const myArray = [18, 64, 99];
myArray[0] = 45
```

## Access Multi-Dimensional Arrays With Indexes

```sh
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
```

result : 8 
mengakses array index 2 yaitu : [7,8,9]
lalu mengakses array index 1 : 8

## Manipulate Arrays With push()

```sh
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
```
result : [["John", 23], ["cat", 2], ["dog", 3]]

## Manipulate Arrays With pop()

```sh
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray =myArray.pop()
```

## Manipulate Arrays With shift()

```sh
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()
console.log(myArray);
```

result : [["dog", 3]]

## Manipulate Arrays With unshift()
shift : Menghapus data elemen pertama
unshift : Menambahkan data di elemen pertama
```sh
const myArray = [["John", 23], ["dog", 3]];
myArray.shift(); 
myArray.unshift(["Paul", 35])
```

result : [["Paul", 35], ["dog", 3]]

## Shopping List

```sh
const myList = [
  ["myName", 1], 
  ["myAge", 23],
  ["myJob", 10],
  ["myHome", 12],
  ["myCampus", 5],
];
```

## Write Reusable JavaScript with Functions

```sh
function reusableFunction(){
  console.log("Hi World")
}
reusableFunction()
```

Javascript Dasar

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

## Remove First and Last Character

```sh
function removeChar (str) {
    return str.slice(1,-1)
}
let nama = 'habib';
console.log(removeChar(nama))
```

result : abi

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

## Passing Values to Functions with Arguments

```sh
function functionWithArgs(one, two) {
  console.log(one + two);
}
functionWithArgs(1,2)
```

result = 3

## Multiple Identical Options in Switch Statements

```sh
function sequentialSizes(val) {
  let answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
    return "Low"
    break;
    case 4:
    case 5:
    case 6:
    return "Mid"
    break;
    case 7:
    case 8:
    case 9:
    return "High"
    break;
  }
  return answer;
}
sequentialSizes(1);
```

## Replacing If Else Chains with Switch

```sh
function chainToSwitch(val) {
  let answer = "";
  switch(val){
    case 'bob':
    return 'Marley'
    break;
    case 42:
    return 'The Answer'
    break;
    case 1:
    return 'There is no #1'
    break;
    case 99:
    return 'Missed me by this much!'
    break;
    case 7:
    return 'Ate Nine'
  }

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }
  return answer;
}

chainToSwitch(7);
```

## Returning Boolean Values from Functions

```sh
function isLess(a, b) {
  return a < b;

  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }
}

isLess(10, 15);
```

## Return Early Pattern for Functions

```sh
// Setup
function abTest(a, b) {
  if(a < 0 || b < 0){
    return ;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,1));
```

## Counting Cards

```sh
let count = 0;

function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }
  if(count > 0){
    return count + " Bet"
  } else {
    return count + " Hold"
  }
}

console.log(cc(6));
cc(3); cc(7); cc('K'); cc('A');
```

## Build JavaScript Objects

```sh
const myDog = {
  'name' : "1",
  "legs" : 2,
  "tails": 3,
  "friends": []
};
```

## Accessing Object Properties with Variables

```sh
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
console.log(player)
```

## Updating Object Properties

```sh
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"
```

## Add New Properties to a JavaScript Object

```sh
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"
```

## Delete Properties from a JavaScript Object

```sh
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails
```

## Using Objects for Lookups

```sh
// Setup
function phoneticLookup(val) {
  let result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // Only change code above this line
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
```

## Testing Objects for Properties

```sh
function checkObj(obj, property) {
  if(obj.hasOwnProperty(property)){
    return obj[property]
  } else {
    return "Not Found"
  }
}
let data = {city: "Seattle"}
console.log(checkObj(data, "city")) // Seattle
console.log(checkObj(data, "gift")) // Not Found
```

## Manipulating Complex Objects

```sh
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist" : "Beetles",
    "title" : "Hey Jude",
    "release_year" : 2013,
    "formats" : [
      "CD",
      "4T",
      "LP"
    ],
    "gold" : true
  },
];
```

## Accessing Nested Objects

```sh
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"]
```

## Accessing Nested Arrays

```sh
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];
```

## Record Collection

```sh
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop]
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = []
    }
    records[id][prop].push(value);
  }
  return records;
}
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
```

# Iterate with JavaScript While Loops
```sh
const myArray = [];
let i =5;
while(i >= 0){
  myArray.push(i);
  i--
}
console.log(myArray)
```

## Iterate with JavaScript For Loops
```sh
const myArray = [];
for(let i=1; i <=5; i++){
  myArray.push(i)
}
console.log(myArray)
```

## Iterate Odd Numbers With a For Loop
```sh
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray)
```

## Count Backwards With a For Loop
```sh
const myArray = [];
for(let i = 9; i>=1; i -= 2){
  myArray.push(i)
}

console.log(myArray)
```

## Iterate Through an Array with a For Loop
```sh
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i=0; i<myArr.length; i++){
  total += myArr[i]
}
```

## Nesting For Loops
```sh
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

```sh
function multiplyAll(arr) {
  let product = 1;
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      // console.log(arr[i][j])
      product *= arr[i][j]
    }
  }
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
```

## Iterate with JavaScript Do...While Loops
```sh
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++
} while (i<5)
console.log(myArray)
```

## Replace Loops using Recursion
```sh
function sum(arr, n) {
  if(n <= 0){
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1]
  }
}
console.log(sum([2, 3, 4, 5], 3))

// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }

//   console.log(multiply([1,2,2], 3))
```

## Profile Lookup
```sh
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i=0; i<contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
       return contacts[i][prop]
      } else {
        return "No such property"
      }
    }
  }
  return "No such contact"
}

console.log(lookUpProfile("Akira", "likes"));
```
result : [ 'Pizza', 'Coding', 'Brownie Points' ]

## Generate Random Fractions with JavaScript
```sh
function randomFraction() {
  return Math.random()
}
console.log(randomFraction(1));
```
result : 0.5316579673871293

## Generate Random Whole Numbers with JavaScript
```sh
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum())
```
result : Num(0-9)

## Generate Random Whole Numbers within a Range
```sh
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

console.log(randomRange(1, 6))
```
result : NumRange(1-6)

## Use the parseInt Function
```sh
function convertToInteger(str) {
  return parseInt(str)
}
console.log(convertToInteger("56"));
```
result : 56

## Use the parseInt Function with a Radix
```sh
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));
```
result : 19

## Use the Conditional (Ternary) Operator
```sh
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
}
console.log(checkEqual(1, 2));
```
result : Not Equal

## Use Multiple Conditional (Ternary) Operators
```sh
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
}
console.log(checkSign(10));
```
result : positive

## Use Recursion to Create a Countdown
```sh
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}
console.log(countdown(5))
```
result : [ 5, 4, 3, 2, 1 ]

```sh
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(10));
```
result : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

## Use Recursion to Create a Range of Numbers
```sh
function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return []
  } else {
    const arr = rangeOfNumbers(startNum, endNum -1)
    arr.push(endNum)
    return arr
  }
};
console.log(rangeOfNumbers(1,5))
```
result : [ 1, 2, 3, 4, 5 ]


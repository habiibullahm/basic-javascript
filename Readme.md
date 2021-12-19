## Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

```sh
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let countPositives = 0;
  let sumNegatives = 0;
  input.map((data) => {
    if (data > 0) {
      countPositives++;
    } else if (data < 0) {
      sumNegatives = sumNegatives + data 
    }
  });
  return [countPositives, sumNegatives];
}
```
Test 
```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 1", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  });
});
```
## Create Phone Number

```sh
function createPhoneNumber(numbers) {
  if (numbers.length !== 10 ) {
      return "harus 10 angka"
  }
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    switch (i) {
      case 0:
        result = "(" + numbers[i];
        break;
      case 3:
        result += ") " + numbers[i];
        break;
      case 6:
        result += "-" + numbers[i];
        break;
      default:
        result += numbers[i];
        break;
    }
  }
  return result;
}
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(data));
```
```sh
function createPhoneNumber(numbers) {
  if (numbers.length !== 10 ) {
    return "harus 10 angka"
  } 
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0 ) {
        result = "(" + numbers[i]
    } else if (i === 3) {
        result += ") " + numbers[i]
    } else if (i === 6) {
        result += "-" + numbers[i]
    } else {
        result += numbers[i]
    }
  }
  return result;
}
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(data));
```


result : (123) 456-7890

## Remove First and Last Character
```sh
function removeChar(str) {
  return str.slice(1, -1);
}
```
Test
```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
```
## String repeat

```sh
function repeatStr (n, s) {
    return s.repeat(n)
}
```
Test :
```sh
describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertSimilar(repeatStr(3, "*"), "***");
    Test.assertSimilar(repeatStr(5, "#"), "#####");
    Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
  });
});
```

## Convert a Number to a String!

```sh
function numberToString(num="") {
    return `${num}`
}
```

Test
```sh
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(numberToString(67), '67');
  });
});
```

## Convert stringToNumber

```sh
const stringToNumber = (s) => {
   return Number(s)
}
```

## Sum of positive

```sh
function positiveSum(arr) {
    let res=0;
    for (let i=0; i<arr.length; i++){
    if (arr[i] > 0 ){
      res += arr[i]
    }
  } 
    return res;
 }
console.log(positiveSum([1,-2, 6,2,8,-10]));
```

```sh
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
console.log(positiveSum([1,2,-3]));
```

Test 

```sh
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
    });
  });
  ```

## Abbreviate a Two Word Name

```sh
function abbrevName(name){
   let res= name;
   res = res.split(" ");
   res = res.map(item => {
      console.log(item[0]);
      return item[0].toUpperCase()
   }) 
   res = res.join(".")
   return res; 
   
}
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});
```
## Reverse String 

```sh
function solution(s){
   let res = '';
   
   for (let i = s.length - 1; i >= 0; i--){
      res = res + s[i];
      console.log("res", res);
      console.log("i", i);
   }   
   return res;
 }
 console.log(solution("Tamala"));
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
}); 
```
result : alamat

## Check isDevideBy

```sh
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
console.log(isDivideBy(4, 1, 4));
```

Test 

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",function(){
  it("Testing for fixed tests", () => {
    assert.strictEqual(isDivideBy(8, 2, 4), true);
    assert.strictEqual(isDivideBy(12, -3, 4), true);
    assert.strictEqual(isDivideBy(8, 3, 4), false);
    assert.strictEqual(isDivideBy(5, 2, -2), false);
    assert.strictEqual(isDivideBy(-100, -25, 10), true);
    assert.strictEqual(isDivideBy(10000, 5, -3), false);
    assert.strictEqual(isDivideBy(4, 4, 2), true);
    assert.strictEqual(isDivideBy(5, 2, 3), false);
    assert.strictEqual(isDivideBy(-96, 25, 17), false);
    assert.strictEqual(isDivideBy(33, 1, 33), true);
  })
})
```

result : True

## petals

```sh
function howMuchILoveYou(nbPetals) {
   let word = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"]
   let res;
   if (nbPetals>0){
      return res= word[nbPetals%6]
   } 
   return res;
}
console.log(howMuchILoveYou(7));
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("howMuchILoveYou",function() {
  it("Basic tests",function() { 
    assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")
  });
})
```

result: I love you


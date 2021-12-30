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

## minmax

```sh
function minMax(arr){
   let min = arr[0];
   let max = arr[0];
   for (let i = 1; i<arr.length; i++){
      console.log(`saat ini max adalah = ${max}, lalu dibandingkan dengan ${arr[i]}`);
      console.log(`saat ini min adalah =${min}, lalu di bandingkan dengan ${arr[i]}`);
      if (arr[i]>max){
         max=arr[i]
      }
      if (arr[i]<min){
         min=arr[i]
      }
   }
   return [min,max]; 
 }
```

Test

```sh
var test = function(arr, res){
  Test.assertSimilar(minMax(arr), res, "tested on " + JSON.stringify(arr) + ":");
};

describe("minMax", function(){
  it("should work for some examples", function(){
    var i, r;
    test([1,2,3,4,5], [1,5]);
    test([2334454,5], [5, 2334454]);
    
    for(i = 0; i < 20; ++i){
      r = Math.random();
      test([r], [r,r]);
    }   
  });
});
```

## Middle Character
jika ganjil menampilkan 1 character tengah
jika genap menampilkan 2 character tengah
```sh
function getMiddle(s){
   if (s.length %2 ===0){
      return `${s[(s.length/2)-1]}${s[s.length/2]}`
   } else {
      return s[Math.floor(s.length/2)]
   }
}
```

Test
```sh
describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
})
```

## Removes string spaces

```sh
function noSpace(x){
   return x.split(' ').join('')
 }
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});
```

## Summing a number's digits

```sh
function sumDigits(number){
   let res = 0;
   String(number).split('').forEach(item=>{
      if (Number(item)>0){
         res += Number(item);
      }
      console.log((item));
   })
   return res;
}
```

Test:

```sh
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
    })
  })
```
## Highest and Lowest

```sh
function highAndLow(numbers){
   let angka = numbers.split(' ')
   
   return `${Math.max(...angka)} ${Math.min(...angka)}`;
 }
 console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");   
  });
});
```

result: 42 -9

## Find the smallest integer in the array

```sh
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  let sif = new SmallestIntegerFinder();
  it("Fixed Tests", () => {
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
})
```

## removeSmallest

removeSmallest on lower index

```sh
function removeSmallest(numbers) {
  let angka = [];
  for (let z = 0; z < numbers.length; z++) 
    angka[z] = numbers[z];
    let key = 0;
    for (let i = 0; i < angka.length; i++) {
      if (angka[key] > angka[i]) {
        key = i;
      }
  }
  angka.splice(key,1);
  return angka;
}
console.log(removeSmallest([2,2,1,2,1]));
```

Test

```sh 
describe("removeSmallest", function() {
  it("works for the examples", function() {
    Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
  });
  
  it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });
  
  function randomArray(length) {
    return Array.from({length: length}, () => ~~(Math.random() * 400));
  }
  
  it("returns a list that misses only one element", function() {
    for(let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      Test.assertSimilar(removeSmallest(arr).length, l - 1, `Wrong result for ${arr}`);
    }
  });
});
```

result: [ 2, 2, 2, 1 ] 

## Counting sheep...

```sh
 function countSheeps(arrayOfSheep) {
   let hitung = 0
   for(let i = 0; i < arrayOfSheep.length; i++) {
       if(arrayOfSheep[i]) hitung += 1
   }
   return hitung
}
```

Test:

```sh
describe("Tests", () => {
  it("test", () => {
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});
```
## object--toString() and toLocaleString()

```sh
function colorOf(r,g,b){
   r= r.toString(16)
   if(r.length===1){
      r=`0${r}`
   } 
   g=g.toString(16)
   if(g.length===1){
      g=`0${g}`
   }
   b=b.toString(16)
   if(b.length===1){
      b=`0${b}`
   }
return `#${r}${g}${b}`
}
```

Test

```sh
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(colorOf(255,0,0), "#ff0000");
    showColor("#ff0000")
    Test.assertSimilar(colorOf(0,111,0), "#006f00");
    showColor("#006f00")
    Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
    showColor("#010203")
  });
});
```

## What's the real floor?

```sh
function getRealFloor(n) {
   let floor=n;
   if(floor>0){
      floor--
   } 
   if (floor>=13){
      floor--
   }
   return floor
}
```

Test

```sh
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getRealFloor(1), 0);
Test.assertEquals(getRealFloor(5), 4);
Test.assertEquals(getRealFloor(15), 13);
  });
});
```
##  create your first JS function 

```sh
function helloWorld(str){
   var str = "Hello World!";

   console.log(str)
}
```
Test

```sh
describe("Tests", () => {
  it("test", () => {
Test.expect(helloWorld, "function helloWorld is not defined")
helloWorld();
  });
});
```
## Evens times last

```sh
function evenLast(n) {
   return n.length!=0?  (n.filter((e, i) => {  return i % 2 == 0; }).reduce((a,b)=>a+b,0))*n[n.length-1] : 0
 }
```

test

```sh
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
  });
});
```
## Methods of String object--slice()

```sh
function cutIt(arr){
   
   let lowestLength;
   //step 1 mengambil length terkecil dari array
   for (let i = 0; i<arr.length; i++){
      if(lowestLength>arr[i].length || !lowestLength){
         lowestLength = arr[i].length
      }
      
   }
   
   return arr.map(item=>item.slice(0,lowestLength))
   
   // console.log(arr[2].slice(0,2));
}
```

Test

```sh
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
    Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
    Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);

  });
});
```

## Remove anchor from URL

```sh
function removeUrlAnchor(url){
   let indexAnchor=url.indexOf("#")
  
   return indexAnchor > 0 ? url.slice(0,indexAnchor) : url
}
```

Test

```sh
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })
```

## Reverse words

```sh
function reverseWords(str) {
   return str.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
 }
```
Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
```
## Count characters in your string

```sh
function count(string) {
  let result = {};
  string.split("").forEach((item) => {
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
  });
  return result;
}
```

Test

```sh
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
    assert.deepEqual(count(""), {});    
  });
});
```


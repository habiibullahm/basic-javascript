## Convert Celsius to Fahrenheit

```sh
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius*1.8000+32
  return fahrenheit;
}
console.log(convertCtoF(30));
```

result : 30

## Reverse a String

```sh
function reverseString(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i]
  }
  return res;
}
console.log(reverseString("hello"));
```

result : olleh

## Factorialize a Number

```sh
function factorialize(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorialize(5));
```

result !5 : 120

```sh
function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
```

## Find the Longest Word in a String

```sh
function findLongestWordLength(str) {
let longestLength = 0;
let currentLength = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    currentLength = 0;
  } else {
    currentLength++;
  }
}
if (currentLength > longestLength) {
  longestLength = currentLength;
}
return longestLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
```

result : 6

## Return Largest Numbers in Arrays
```sh
function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j]
      }
    }
    result[i] = largestNumber;
  }
  return result;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
```

result : [ 5, 27, 39, 1001 ]

Code Explanation
Create a variable to store the results as an array.
Create an outer loop to iterate through the outer array.
Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
Create said inner loop to work with the sub-arrays.
Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
After the inner loop, save the largest number in the corresponding position inside of the results array.
And finally return said array.


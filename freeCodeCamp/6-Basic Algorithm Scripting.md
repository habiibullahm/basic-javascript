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

## Confirm the Ending

```sh
function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
  // return str.endsWith(target)
}
console.log(confirmEnding("Bastian", "n"));
```

result : true

## Repeat a String Repeat a String

```sh
function repeatStringNumTimes(str, num) {
  let result = ""
  for(let i=0; i<num; i++){
    result += str
  }
  return result;
  // return str.repeat(num)
}
console.log(repeatStringNumTimes("abc", 3));
```

result : abcabcabc

## Truncate a String

```sh
function truncateString(str, num) {
  if(str.length > num){
    return str.slice(0, num) + "..."
  } else {
    return str
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
```

result : A-tisket...

Problem Explanation
We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.

## Finders Keepers

Problem Explanation
We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func).

```sh
function findElement(arr, func) {
  let num = 0;
  for(let i=0; i<arr.length; i++){
    num = arr[i]
    if(func(num)){
      return num
    }
  }
  return ;
}
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
```

result : 8
Code Explanation
Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.

## Boo who

Problem Explanation
This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

```sh
function booWho(bool) {
  return typeof(bool) === "boolean"
}
console.log(booWho(true));
```

result : true

## Title Case a Sentence
Problem Explanation
We have to return a sentence with title case. This means that the first letter will always be in uppercase and the rest will be in lowercase.
```sh
function titleCase(str) {
  let newTitle = str.split(" ");
  let updateTitle = [];
  for (let st in newTitle) {
    updateTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase()
  }
  return updateTitle.join(" ")
}
console.log(titleCase("I'm a little tea pot"));
```
result : I'm A Little Tea Pot
Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.

## Slice and Splice
Problem Explanation
We need to copy each element from the first array into the second array starting at the index n. We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.
```sh
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice()
  for(let i=0; i<arr1.length; i++){
    localArray.splice(n, 0, arr1[i]);
    n++
  }
  return localArray
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
```
result : [ 4, 1, 2, 3, 5 ]
Code Explanation
Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.

We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

Finally, we return the localArray and end the function.
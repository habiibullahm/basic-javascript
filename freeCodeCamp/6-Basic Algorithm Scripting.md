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

Problem Explanation
You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

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
  return str.slice(str.length - target.length) === target;
  // return str.endsWith(target)
}
console.log(confirmEnding("Bastian", "n"));
```

result : true

## Repeat a String Repeat a String

Problem Explanation
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

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

```sh
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } return str + repeatStringNumTimes(str, num - 1)
}
console.log(repeatStringNumTimes("abc", 3));
```

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

## Falsy Bouncer

Problem Explanation
Remove all falsy values from an array.

```sh
function bouncer(arr) {
  let filteredArr = []
  for(let i=0; i<arr.length; i++){
    if(arr[i]) filteredArr.push(arr[i])
  }
  return filteredArr;
}
console.log(bouncer([7, "ate", "", false, 9]));
```

result : [ 7, 'ate', 9 ]
Code Explanation
We create a new empty array (filteredArr).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy or falsy.
If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
We return the new array (filteredArr).

## Where do I Belong

Problem Explanation
This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

```sh
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a-b)
  console.log(arr)
  for(let i=0; i<arr.length; i++){
    if(arr[i] >= num) return i
  }
  return arr.length;
}
console.log(getIndexToIns([5, 3, 20, 3], 5));
```

result : [ 3, 3, 5, 20 ]
2 (index)

Code Explanation
First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.

## Mutations

Problem Explanation
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array…

```sh
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  console.log(target, test)

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false
  }
  return true
}
console.log(mutation(["floor", "for"]));
```

result : floor for
true

Code Explanation
First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.

## Chunky Monkey

Problem Explanation
Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). There are 4 green checks (objectives) our code needs to pass in order to complete this Algorithm:

```sh
function chunkArrayInGroups(arr, size) {
  let result = []
  for(let i=0; i<arr.length; i+=size){
    result.push(arr.slice(i, i +size))
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
```

result : [ [ 'a', 'b' ], [ 'c', 'd' ] ]
Code Explanation
First, we create an empty array newArr where we will store our ‘chunks’.
The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
Note we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
Inside our loop, we create each chunk using arr.slice(i, i+size). The slice method accepts two arguments with the first argument being the index of where the slice should start and the second argument being where the slice should end but does not include the ending index.
We add this chunk/slice to newArr with newArr.push().
Finally, we return the value of newArr once the for loop is complete.

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


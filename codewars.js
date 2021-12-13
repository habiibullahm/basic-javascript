function countPositivesSumNegatives(input) {
  if (!input) {
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
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// console.log(countPositivesSumNegatives());


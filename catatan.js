// let mobil = [
//     {
//         name:'brio',
//         brand : 'honda',        speed : 80
//     },
//     {
//        name : 'L300',
//        brand : 'mitsubishi',
//        speed : 20
//     },
//     {
//         name : 'M2',
//         brand : 'BMW',
//         speed : 150
//     }
// ]
// function getSummary(number=1){
//     console.log('number', number);
//     if (number > mobil.length ) {
//         return 'data tidak ditemukan'
//     } else if (number <= 0 ) {
//         return 'silahkan isi dari angka 1'
//     }

//     let data = mobil[number-1]
//     return `Mobil ${data.brand} ${data.name}, kecepatan maximal ${data.speed} km/jam`
// }

// console.log(getSummary(1));
// console.log(mobil.length);
// console.log(mobil[0]);
// console.log(mobil[0].name);

//Ganjil Genap

// function checkGanjilGenap(listNilai){
//     if (!listNilai) {
//         return []
//     }
//     let hitungGanjil = 0;
//     let hitungGenap = 0;
//     listNilai.map(nilai => {
//         if (nilai % 2 === 0 ){
//             hitungGenap++
//             console.log(nilai, "genap");
//         } else {
//             hitungGanjil += nilai
//             console.log(nilai, "ganjil");
//         }
//     })

//     return [hitungGanjil, hitungGenap]
// }

// console.log(checkGanjilGenap([1, 7, 2, 6, 8]));

// ## create phone number

// function createPhoneNumber(numbers) {
//     console.log("createPhoneNumber");
//   let result = "";
//   for (let i = 0; i < numbers.length; i++) {
//     if (i === 0 ) {
//         result = "(" + numbers[i]
//     } else if (i === 3) {
//         result += ") " + numbers[i]
//     } else if (i === 6) {
//         result += "-" + numbers[i]
//     } else {
//         result += numbers[i]
//     }
//   }
//   return result;
// }

// function createPhoneNumber(numbers) {
// if (numbers.length !== 10 ) {
//     return "harus 10 angka"
// }
//   let result = "";
//   for (let i = 0; i < numbers.length; i++) {
//     switch (i) {
//       case 0:
//         result = "(" + numbers[i];
//         break;
//       case 3:
//         result += ") " + numbers[i];
//         break;
//       case 6:
//         result += "-" + numbers[i];
//         break;
//       default:
//         result += numbers[i];
//         break;
//     }
//   }
//   return result;
// }
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(createPhoneNumber(data));

// ## \n
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// text = "";

// for (let i = 0; i < fLen; i++) {
//   text += fruits[i] + "\n";
// }
// text += "";

// console.log(text)

// ## removes Character

// str = 'AppDividend';
// console.log('Original String: ', str);

// removeFirstChar = str.slice(1);
// console.log(removeFirstChar);

// removeLastChar = str.slice(0, str.length - 1);
// console.log(removeLastChar);

// function removeChar(str) {
//    newStr = str.substr(1, str.length)
//    return newStr ;
// }
// let nama = "habib";
// console.log(removeChar(nama));

// function multiply (a,b) {
//     return a*b
//     }

//     console.log(multiply(1,2));

// const multiply = (a,b) => {
// return a*b
// }

// function removeChar (str) {
//    return str.slice(1,-1)
// }
// let nama = 'habib'
// console.log(removeChar(nama))

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " "+ myAdverb;
// console.log(wordBlanks);

// const myArray = [50, 60, 70];
// let myData = myArray[myArray.length-1];

// console.log(myData);

// Setup
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift()
// console.log(removedFromMyArray);
// console.log(myArray);

// function repeatStr(n, s) {
//   let res ="";
//   for (i = 0; i<n; i++) {
//     res += res ;
//   }
//   return res;
// }
// console.log(repeatStr(5, "data"));
// // console.log(repeatStr(2, "hallo"));

// function repeatStr (n, s) {
//      return s.repeat(n)
//    }

//    console.log(repeatStr(5, " LOL"));

// function numberToString(num="") {
//    return `${num}`
//  }

// console.log(numberToString("1"));

// const stringToNumber = (s) => {
//    return Number(s)
// }
// console.log(stringToNumber(1));

// function positiveSum(arr) {
//    let res=0;
//  for (let i=0; i<arr.length; i++){
//     console.log('arr', arr);
//     console.log('i', i);
//     console.log(arr[i] );
//     if (arr[i] > 0 ){
//       res += arr[i]
//     }
//  }
//  return res;
// }

// console.log(positiveSum([1,-2, 6,2,8,-10]));

// function positiveSum(arr) {
//    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// console.log(positiveSum([1,2,-3]));

// function reverse(s){
//    return s.split("").reverse().join("");
// }

// console.log(reverse("halo"));

// function solution(s){
//    let res = '';

//    for (let i = s.length - 1; i >= 0; i--){
//       res = res + s[i];
//       console.log("res", res);
//       console.log("i", i);
//    }
//    return res;
//  }console.log(solution("Tamala"));

// function abbrevName(name){
//    let res= name;
//    res = res.split(" ");
//    res = res.map(item => {
//       console.log(item[0]);
//       return item[0].toUpperCase()
//    })
//    res = res.join(".")
//    return res;

// }
// console.log(abbrevName("muhammad habiibullah"));

// function abbrevName(name){

//    var nameArray = name.split(" ");
//    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//  }

//# devide it

// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
// console.log(isDivideBy(4, 1, 4));

// function isDevideBy(number, a, b) {
//   let res;
//   if (number % a === 0 && number % b === 0) {
//     return true;
//   } else {
//     return false;
//   }
//   return res;
// }
// console.log(isDevideBy(15, 4, 3));




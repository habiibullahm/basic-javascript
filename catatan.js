let mobil = [
    {
        name:'brio',
        brand : 'honda',        speed : 80
    },
    {
       name : 'L300',
       brand : 'mitsubishi',
       speed : 20
    },
    {
        name : 'M2',
        brand : 'BMW',
        speed : 150
    }
]
function getSummary(number=1){
    console.log('number', number);
    if (number > mobil.length ) {
        return 'data tidak ditemukan'
    } else if (number <= 0 ) {
        return 'silahkan isi dari angka 1'
    }

    let data = mobil[number-1]
    return `Mobil ${data.brand} ${data.name}, kecepatan maximal ${data.speed} km/jam`
}

// console.log(getSummary(1));
// console.log(mobil.length);
// console.log(mobil[0]);
// console.log(mobil[0].name);

//Ganjil Genap

function checkGanjilGenap(listNilai){
   //  if (!listNilai) {
   //      return []
   //  }
    let hitungGanjil = 0;
    let hitungGenap = 0;
    listNilai.map(nilai => {
        if (nilai % 2 === 0 ){
            hitungGenap++
            console.log(nilai, "genap", ": *** ");
        } else {
            hitungGanjil += nilai
            console.log(nilai, "ganjil");
        }
    })

    return [hitungGanjil, hitungGenap]
}

console.log(checkGanjilGenap([1, 7, 2, 6, 8]));

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

// function howMuchILoveYou(n) {
//    let word = ["I love you", "a little","a lot","passionately","madly","not at all",]
//    let d=0
//  if (n%6==0) d =6
//  else d=n%6
//    n%6 ==0 ? d=6 : d=n%6
//    return word[d-1]
// }

// console.log(howMuchILoveYou(6));

// function howMuchILoveYou(nbPetals) {
//    let word = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"]
//    let res;
//    if (nbPetals>0){
//       return res= word[nbPetals%6]
//    }
//    return res;
// }

//## MinMAx

// function minMax(arr){
//    return [Math.min(...arr), Math.max(...arr)];
//  }

// console.log(minMax([1,2,3,-1,4]));

// function getMiddle(s){
// 1.menentukan word.length adalah ganiil/genap
// 2.menampilkan 1 karakter di tengah jika ganjil
// 3.menampilkan 2 karakter jika di genap
//    if (s.length %2 ===0){
//       console.log("genap");
//       return `${s[(s.length/2)-1]}${s[s.length/2]}`
//       // return `${s[2]}${s[3]}`
//    } else {
//       console.log("ganjil");
//       return s[Math.floor(s.length/2)]
//    }
// }
// console.log(getMiddle("middle"));

// ## remove string space

// function noSpace(x){
//    return x.split(' ').join('')
//  }

//  console.log(noSpace("h a b i b"));

// function sumDigits(number){
//    let res = 0;
//    String(number).split('').forEach(item=>{
//       if (Number(item)>0){
//          res += Number(item);
//       }
//       console.log((item));
//    })
//    return res;
// }
// console.log(sumDigits(99));

// function sumDigits(number) {
//    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//  }

//  console.log(sumDigits(-32));

// function highAndLow(numbers){
//    let angka = numbers.split(' ')

//    return `${Math.max(...angka)} ${Math.min(...angka)}`;
//  }

//  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// ## remove smallest

// function removeSmallest(numbers) {
//   let baru = [];
//   for (let k = 0; k < numbers.length; k++) baru[k] = numbers[k];

//   let key = 0;
//   for (let i = 0; i < baru.length; i++) {
//     if (baru[key] > baru[i]) {
//       key = i;
//     }
//   }
//   baru.splice(key, 1);
//   return baru;
// }

// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
// console.log(removeSmallest([2,2,1,2,1]));

// ## smallest integer
// class SmallestIntegerFinder{
//    findSmallestInt(args) {
//      return Math.min(...args)
//    }
// }

// ## Methods of Number object--toString() and toLocaleString()

// algo:
// 1. deklarasi warna
// 2. mengconvert parameter k string(16)
// function colorOf(r,g,b){
//    r.toString(16).length<2 ? r=='0' + r.toString(16) : r= r.toString(16);
//    g.toString(16).length<2 ? r=='0' + g.toString(16) : r= g. toString(16)
//    b.toString(16).length<2 ? b=='0' + b.toString(16) : b = b.toString(16);

//    return '#'+r+g+b;
// }

// console.log(colorOf(255,0,0));

// ## counting ship

//  function countSheeps(arrayOfSheep) {
//    let hitung = 0
//    for(let i = 0; i < arrayOfSheep.length; i++) {
//        if(arrayOfSheep[i]) hitung += 1
//    }
//    return hitung
// }

// class SmallestIntegerFinder {
//    findSmallestInt(args) {
//    return Math.min(...args)

//    }
//  }
// let small = new SmallestIntegerFinder
// console.log(small.findSmallestInt([34, 15, 88, 2]))

// function colorOf(r,g,b){
//    r= r.toString(16)
//    if(r.length===1){
//       r=`0${r}`
//    }
//    g=g.toString(16)
//    if(g.length===1){
//       g=`0${g}`
//    }
//    b=b.toString(16)
//    if(b.length===1){
//       b=`0${b}`
//    }

// return `#${r}${g}${b}`
// }
// console.log(colorOf(255,0,0));

//

// function cutIt(arr){
//    let res = 0
//    //step 1, cari leng paling kecil dari arr
//    for (let i=0; i<arr.length; i++){
//       if(arr[i]<arr[i-1]){
//          res =[arr[i]]
//       }
//    }

//    return res
//  }

//  console.log(cutIt(["ab","cde","f"]));

// function evenLast(n) {
//    return n.length!=0?  (n.filter((e, i) => {  return i % 2 == 0; }).reduce((a,b)=>a+b,0))*n[n.length-1] : 0
//  }

// function evenLast(n){
//    if (n.length<1){
//       return 0
//    }
//    let evenValue=0

//    for (let i=0; i<n.length; i++){
//       if(n[i]%2 === 0){
//          evenValue += n[i]
//       }

//    }
//    return evenValue*n[n.length-1]
// }

// console.log(evenLast([2,3,4,5]));

// ##
// function cutIt(arr){

//    let lowestLength;
   //step 1 mengambil length terkecil dari array
//    for (let i = 0; i<arr.length; i++){
//       if(lowestLength>arr[i].length || !lowestLength){
//          lowestLength = arr[i].length
//       }

//    }

//    return arr.map(item=>item.slice(0,lowestLength))

   // console.log(arr[2].slice(0,2));
// }

//  console.log(cutIt(["ab","cde","fgh"]));

//  function cutIt(arr){
//    const minLength = Math.min(...arr.map(x => x.length));
//    return arr.map(x => x.slice(0, minLength));

// ##
// function removeUrlAnchor(url){
//    let indexAnchor=url.indexOf("#")

//    console.log(indexAnchor);
//    return indexAnchor > 0 ? url.slice(0,indexAnchor) : url
// }

// console.log(removeUrlAnchor("www.codewars.com/user/about"));

// ## Reverse words
// function reverseWords(str) {
//    return str.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
//  }

//  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

// ## Count characters in your string

// function count(string) {
//   let result = {};
//   string.split("").forEach((item) => {
//     if (!result[item]) {
//       result[item] = 1;
//     } else {
//       result[item] += 1;
//     }
//   });
//   return result;
// }
// console.log(count("aba"));

// ##



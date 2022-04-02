// function ArrayChallenge(arr) { 
//     let temps = arr[0]
//     let profit = -1

//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > temps) {
//             profit = Math.max(profit, arr[i] - temps)
//         } else {
//             temps = arr[i]
//         }
//     }
//     return profit
// }
// console.log(ArrayChallenge([44, 30, 24, 32, 35, 30, 40, 38, 15]));
     
  // keep this function call here 
//  
//   console.log(ArrayChallenge([14,20,4,12,5,11]));

// findProfit = (arr) => {
//     let res = 0
//     for (i=0;i<arr.length;i++){
        // console.log(arr[i])
//         for (j=i+1; j<arr.length;j++){
//             console.log(arr[i],arr[j])
//             tempRes = (arr[j] - arr[i])
//             if (tempRes > res) {
//                 res = tempRes
//             }
//         }
//     }
//     return res
// }
// console.log('res', findProfit([15,30,28,55]))

// let txt = "I can eat bananas all day";
// console.log(txt.slice(10,17)) 

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// console.log(fruits.sort());

// function simpleArraySum(ar) {
//     let res = 0
//     if (ar.length < 1 ) {
//         return "Tidak boleh kosong"
//     } 
//     for (let i=0; i <ar.length; i++) {
//         if (ar[i] <= 1000){
//             res += ar[i]
//         }
        
//     }
//     return res
// }

// console.log(simpleArraySum([1,2,3,1001]));
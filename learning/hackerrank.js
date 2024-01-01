//! arraySum

arraySum = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 1000) {
            sum += arr[i]
        }
        if(arr[i] < 1 ){
           return "silahkan isi angka !"
        }
    }

    return sum;
}
let data = [0];
// console.log(arraySum(data));

function myFunction(x) {
    return  x.replace()
}

// console.log(myFunction("http://github.com/subagyo/project-mantab")); 

function FindIntersection(strArr) { 

    let a = strArr[0].split(', ')
    let b = strArr[1].split(', ')
    let result = a.filter(x => b.find(a=> a===x))

    return result.length > 0 ? result.join(',') : 'false' 
  
  }
     
//   keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

function countUnique(arr) {

    //Mengecheck apa aja isi dari array
    //Menyimpan arra uniq di satu wadah (bkin wadah)
    //Menghitung jumlah dalam wadah tersebut
    let UniqueValue = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            UniqueValue.push(arr[i])
        }
    }
    return UniqueValue.length
}

// console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

hitungAngkaUnik = (arr) =>{
    let res = 0;
    for (let i =0; i<= arr.length; i++){
        if (arr[i] !== arr[i+1])
        // res.push(arr[i])
        res ++
    }

    return res
}

// console.log(hitungAngkaUnik([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
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

console.log(getSummary(1));
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

let mobil = [
    {
        name:'brio',
        brand : 'honda',
        speed : 80
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

mobil.map((item)=>{
    getSummary(item)
})
console.log(getSummary(2));
// console.log(mobil.length);
// console.log(mobil[0]);
// console.log(mobil[0].name);

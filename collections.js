let mobil = [
    {
      name: "brio",
      brand: "honda",
      speed: 80,
    },
    {
      name: "L300",
      brand: "mitsubishi",
      speed: 20,
    },
    {
      name: "M2",
      brand: "BMW",
      speed: 150,
    },
  ];

  // function getSummary(data) {
  //   return `Mobil ${data.brand} ${data.name}, kecepatan maximal ${data.speed} km/jam`;
  // }
  // mobil.map((item) => {
  //   console.log(getSummary(item));
  // });
  
  // getSummary = (data) => {
  //   return `Mobil ${data.brand} ${data.name}, kecepatan maximal ${data.speed} Km/jam`
  // }

  getSummary = (data) => {
    return `Mobil ${data.brand} ${data.name}, Kecepatan maximal ${data.speed} Km/jam`
  }

  mobil.map((item) => {
    console.log(getSummary(item));
  })
//   result : 
//   Mobil honda brio, kecepatan maximal 80 km/jam
//   Mobil mitsubishi L300, kecepatan maximal 20 km/jam
//   Mobil BMW M2, kecepatan maximal 150 km/jam
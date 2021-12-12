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
function getSummary(data) {
  return `Mobil ${data.brand} ${data.name}, kecepatan maximal ${data.speed} km/jam`;
}
mobil.map((item) => {
  console.log(getSummary(item));
});

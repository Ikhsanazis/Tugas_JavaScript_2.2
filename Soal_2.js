//buat program search name yang menerapkan callback function
let nama = [
  "Anthony",
  "Lewis",
  "Selene",
  "Novo",
  "samuel",
  "aNgela",
  "Campbell",
  "DeaN",
  "San",
];

let anggota = [];

function callback(keyword, array, limit) {
  if (array.length == 0) {
    console.log(`Periksa Input array`);
  } else if (typeof limit != typeof 3 || limit < 1) {
    console.log(`Periksa Input limit`);
  } else {
    var array = array.map(String).map((element) => element.toLowerCase());
    console.log(`ini : ${array}`);
  }
  console.log(array);

  let findKeyword = array.filter((array) =>
    array.includes(keyword.toLowerCase())
  )
  return findKeyword;
}

function searchName(keyword, array, limit, callback) {
  const newarray = callback(keyword, array, limit);
  if (newarray.length == 0 || limit <=0) {
    return;
  } else {
    newarray.splice(limit, newarray.length - 1);
    console.log(newarray);
  }
}

console.log(`------------------------------------`);
console.log(`kondisi 1 : Mencari keyword An dengan jumlah 3`);
searchName("An", nama, 3, callback);
console.log(`------------------------------------`);
console.log(`Kondisi 2 : Mencari keyword an jumlah 10`);
searchName("an", nama, 10, callback);
console.log(`------------------------------------`);
console.log(`Kondisi 3 : Mencari keyword EL dengan jumlah a`);
searchName("eL", nama, "a", callback);
console.log(`------------------------------------`);
console.log(`Kondisi 4 : data array kosong`);
searchName("eL", anggota, 3, callback);
console.log(`------------------------------------`);
console.log(`kondisi 5 : Mencari keyword An dengan jumlah -3`);
searchName("An", nama, -3, callback);
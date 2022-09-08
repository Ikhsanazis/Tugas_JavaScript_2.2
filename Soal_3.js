//Soal 3

function call(dataAwal, dataAkhir, dataArray) {
  //membuat array baru
  var databaru = [];
  databaru.push(dataAwal);
  databaru.push(dataAkhir);
  databaru.push(dataArray);

  var dataArray = dataArray.sort((a, b) => a - b);
  console.log(databaru);
  var databaru = databaru.map((number) => Number(number));

  //pengecekan nilai akhir dan nilai awal
  let kondisi1 = dataAwal > dataAkhir;
  let kondisi2 = typeof dataAwal !== typeof 1;
  let kondisi3 = typeof dataAkhir !== typeof 1;
  let kondisi4 = kondisi1 || kondisi2 || kondisi3;

  if (kondisi4) {
    console.log(
      `Periksa kondisi berikut \n1. Nilai Awal harus lebih kecil dari nilai akhir \n2. Tipe data input Number \n `
    );
  }
  //inoput data array harus lebih dari 5
  else if (dataArray.length <= 5) {
    console.log("jumlah angka dalam data array harus lebih dari 5");
  } else {
    //pengecekan apakah data array berada pada range yang sesuai
    var dataBaru = [];
    for (i = 0; i < dataArray.length; i++) {
      if (dataArray[i] > dataAwal && dataArray[i] < dataAkhir) {
        dataBaru.push(dataArray[i]);
      }
    }
    //hasil dan statemen akhir
    if (dataBaru.length > 0) {
      console.log(dataBaru);
    } else {
      console.log(`tidak ditemukan`);
    }
  }
}

console.log(`------------------------------------------------`);
console.log(`kondisi 1 : Aangka awal besar dari angka akhir`);
call("A", 10, [1, 2, 3, 5, 5, 6, 7]);
console.log(`------------------------------------------------`);
console.log(`kondisi 2 : data array kecil sama 5`);
call(3, 10, [1, 2, 3, 5]);
console.log(`------------------------------------------------`);
console.log(`kondisi 3 : kondisi 3 semua kondisi true`);
call(3, 10, [1, 2, 3, 5, "a", 5, 6, true, false]);
console.log(`------------------------------------------------`);
console.log(`kondisi 4 : data array tidak pada range`);
call(3, 10, [1, 2, 3, "a", true, false]);
console.log(`------------------------------------------------`);

var nomor = [9, 2, 3, 4, 2, 7, 8, 5, 11, 1];

 var genap = [];
var ganjil = [];
var i = 0;
for (i; i <nomor.length; i++){
     if (nomor[i] % 2 == 0){
         ganjil.push(nomor[i]);
    }else{
         genap.push(nomor[i]);
    }
}

console.log(genap);
console.log(ganjil);
var angka = ["4", "2", "3", "1", "7"];
angka.length
console.log(angka.sort())
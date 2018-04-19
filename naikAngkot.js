function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arrObj = [];
  var index1 = [];
  var index2 = [];



  for(var i =0; i < arrPenumpang.length;i++){
   for(var z = 0; z < rute.length; z++){
    if(arrPenumpang[i][1] === rute[z]){
      index1.push(z);
     }
      if(arrPenumpang[i][2] === rute[z]){
       index2.push(z);
    }
    }
     arrObj.push({
          penumpang: arrPenumpang[i][0],
          naikDari: arrPenumpang[i][1],
          tujuan: arrPenumpang[i][2],
          bayar: (index2[i] - index1[i]) * 2000
        });
   }

   return arrObj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

function cariPelaku(str) {
  str = str.match(/abc/g);

  if(str !== null){
    return str.length;
  }
  else{
    return "none";
  }
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2

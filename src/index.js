module.exports = function multiply(first, second) {
  const arr1 = first.split('').reverse();
  const arr2 = second.split('').reverse();
  const res = new Array();
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(res[i + j]) {
        res[i + j] += arr1[i] * arr2[j];
      } else {
        res[i + j] = arr1[i] * arr2[j];
      }
    }
  }

  for(let i = 0; i < res.length; i++) {
    if(res[i] >= 10) {
      if(res[i + 1]){
        res[i + 1] += Math.floor(res[i] / 10);
      } else {
        res[i + 1] = Math.floor(res[i] / 10);
      }
      res[i] %= 10;
    }
  }
  return res.reverse().join('');
}

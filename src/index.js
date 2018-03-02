module.exports = function longestConsecutiveLength(array) {
  var i = 0, answer = 0, max = 0;
  var temp = [];
  for (i = 0; i < array.length-1; i++){
    if (array[i+1]-array[i] === 1)
    {  answer++;
       temp.push(answer);
    }
    else if (answer !== 0){
      answer = 0;
    }
  }
  for (i = 0; i < temp.length; i++){
    if (temp[i] > max){
      max = temp[i];
    }
  }

  return ++max;
}

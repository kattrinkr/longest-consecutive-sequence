module.exports = function longestConsecutiveLength(array) {
  var i = 0, answer = 0, max = 0;
  var temp = [];

  if (array.length === 0) //Для массива без элементов
    return 0;
  if (array.length === 1) //Для массива с 1 элементом
      return 1;

  for (i = 0; i < array.length-1; i++){//Сброс повторяющихся элементов
    if (array[i] === array[i+1])
      array[i] = 0; }

  array.sort(compareNumbers);//Сортировка массива

  for (i = 0; i < array.length-1; i++){//Помещаем в temp длины всех послед-ей
    if (array[i+1]-array[i] === 1)
    {  answer++;
       temp.push(answer);
    }
    else if (answer !== 0){
      answer++;
      temp.push(answer);
      answer = 0;
    }
  }

  var last = array.pop();//Проверяем два последних элемента
  var prelast = array.pop();
  if (last - prelast === 1)
  {  answer++;
     temp.push(answer);
  }

  for (i = 0; i < temp.length; i++){//Находим максимальную последовательность
    if (temp[i] > max){
      max = temp[i];
    }
  }

  return max;
}

function compareNumbers(a, b) {
  return a - b;
}

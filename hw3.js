// 1)Написать функцию (чистую), которая объединяет две строки и возвращает результат 
function oneString(value1, value2) {  
    return value1 + value2;
}
console.log(oneString('превед', 'сосед'));
console.log("");



//  2)Создать массив строк и написать функцию для объединения всех элементов массива в одну строку.
//(Первый вариант)
const arrayStr = ['слоны', 'идут', 'на' , 'север'];
const sum = arrayStr.reduce(function (a, b) {
  return a + ' ' +  b; // добавляю пробел для "разделения" строк
});
console.log(sum); 
console.log("");
//(Второй вариант)
// function arrayStr(array) {
//   const a = String(array[0]);
//   const b = String(array[1]);
//   const c = String(array[2]);
//   const d = String(array[3]);
//   return a + b + c + d;
// }
// const array = ['слоны', ' идут', ' на' , 'север'];
// console.log(arrayStr(array));


// 3)Написать функцию, которая принимает строку и возвращает эту же строку в обратном порядке.
function reversStr(str){
  return str.split('').reverse().join('');
  }
console.log(reversStr('привет медвед'));
console.log("");

// 4)Написать функцию которая принимает строку и возвращает эту же строчку но где первая буква с большой буква 
const a = 'привет';
const b = ' мир';
function sumStr(value1, value2) {
  return value1 + value2;
}
const c = sumStr(a,b);
console.log(c[0].toUpperCase() + c.slice(1,10));
console.log("");


// 5)Написать функцию, которая принимает два числа (min max) и возвращает случайное число в указанном диапазоне:
//(первый вариант)
function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min); // random 0,10 (0.99*11) для округления до целых чисел.
    return Math.floor(rand); // Округляет аргумент до ближайшего меньшего целого
}
console.log(randomNum(1, 20));
console.log("");

//(второй вариант)
function randomNum(min, max) { return parseInt(min + Math.random() * (max+1-min)) } 
console.log(randomNum(1, 20));
console.log("");


//6)* Создать массив чисел и написать функцию для вывода суммы всех элементов массива.
//(Первый вариант) - стрелочная функция
const getSum = numbers => numbers.reduce((sum, numbers) => sum + numbers, 0); //
console.log(getSum([4, 8, 15, 16, 23, 42]));
console.log("");
//console.log(typeof(getSum)); //108

//(Второй вариант)
const arr = [4, 8, 15, 16, 23, 42];
const sum1 = arr.reduce(function (a, b) {
  return a + b ;
});
console.log(sum1); // 108
console.log("");




//7)* Создать массив чисел и написать функцию для нахождения среднего арифметического всех элементов массива.
//(первый вариант)
const getAverage = (numbers) => numbers.reduce((x, numbers) => x + numbers, 0) / numbers.length;
console.log(getAverage([4, 8, 15, 16, 23, 42]));
console.log("");
//console.log(typeof(getAverage)); //18

//(второй вариант) Берет значение из задания 6.
// const getAverage = (numbers) => getSum(numbers) / numbers.length;
// console.log(getAverage([4, 8, 15, 16, 23, 42]));
// console.log(typeof(getAverage)); //18

//(Третий вариант)
const getAverage1 = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(getAverage1([4, 8, 15, 16, 23, 42]));
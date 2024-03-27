// //1. Вам дано любое число и вы должны сделать его отрицательным, если оно уже не отрицательное или не 0
function makeNegative(num){
    if (num <= 0) {
        return num;
    }else {
        return num * -1;
    }

}
console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
console.log("\n");

// //Сделать положительными.
// function makePossitive(num){
//     if (num < 0) {
//         return num * -1;
// }else {
//     return num;
//     }
// }

// console.log(makePossitive(-1));
// console.log(makePossitive(-5));
// console.log(makePossitive(0));
// console.log(makePossitive(-0.12));


//2."камень ножницы бумага" - напишите функцию которая возвращает какой игрок выиграл в Камень ножницы бумага
function rockPaperScissors (player1, player2) {
    if (player1 === 'scissors' && player2 === 'paper') {
 

       return 'Player 1 won!'  
         } else if (player1 === 'scissors' && player2 === 'rock') {
        return 'Player 2 won!'
    } else if (player1 === 'paper'&& player2 === 'paper') {
        return 'Draw'
    } else if (player1 === 'car'&& player2 === 'paper') {
        return 'unknown sign'
    }
}
console.log(rockPaperScissors('scissors', 'paper'))
console.log(rockPaperScissors('scissors', 'rock'))
console.log(rockPaperScissors('paper', 'paper'))
console.log(rockPaperScissors('car', 'paper'))
console.log("\n");
//3. Вы получаете массив чисел, верните сумму всех положительных чисел. Если суммировать нечего, то return 0
//Пример: [1,-4,7,12] => return "1+7+12=20"

//reduce
const arr =  [1,-4,7,12];
function positiveSum(arr) {
  return arr.filter(i => i > 0).reduce((a, b) => a + b, 0);
}
console.log(positiveSum(arr));
console.log("\n");


// //for
const sumOfPositives = (arr = []) => {
    let sumArr = 0;
    let sumStr = [];
        for (let i = 0; i < arr.length; ++i) {    
      if (arr[i] > 0) {
        sumArr += arr[i] 
        sumStr.push(arr[i].toString());  
    } 
     
      
    }   return sumStr.reduce((a, b) => a + "+" + b) + "=" + sumArr; 
  }
  
  console.log(sumOfPositives([1,-4,7,12]));
  console.log("\n");

// 4.Создайте функцию с двумя аргументами (step, maxValue) которая будет возвращать массив от 0 до (maxValue * step) с шагом step
// пример:
// function countBy(maxValue, step) {
//     let arr = [];
//     let sum = 0;
    
//     for (let i = 1; i <= step; i++) {
//         sum = maxValue * i;
//         arr[i - 1] = sum;
//     }

//     return arr;


// }
// console.log(countBy(3, 10)) //return [3,6,9,12,15,18, 21, 24,27,30]
// console.log(countBy(2, 5)) //return [2,4,6,8,10]
// console.log(countBy(4, 11)) // return  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]
// console.log("\n");


// function countBy(step, maxValue) {
//     let arr = [];
//     for(i = 0; i <= step*maxValue; i+=step) {
//         if (i == 0) continue;
//         arr.push(i);
//     }
//         return arr;
// }
// console.log(countBy(3, 10)) //return [3,6,9,12,15,18, 21, 24,27,30]
// console.log(countBy(2, 5)) //return [2,4,6,8,10]
// console.log(countBy(4, 11)) // return  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44] 
function countBy(step, maxValue) {
    let arr = [];
    for(i = step; i <= step*maxValue; i+=step) {
        if (i == 0) ;
        arr.push(i);
    }
        return arr;
}
console.log(countBy(3, 10)) //return [3,6,9,12,15,18, 21, 24,27,30]
console.log(countBy(2, 5)) //return [2,4,6,8,10]
console.log(countBy(4, 11)) // return  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44] 
console.log("\n");


//5. Напишите код для управления светофором: (порядок цветов red => yellow => green => yellow => red => ....)

// Напишите функцию которая принимает текущий цвет и нужное количество итераций 
//светофора и возвращает n последующих цветов светофора 

// Пример:
// trafficlightNextColors("green", 4)   //return "yellow red yellow green"
// trafficlightNextColors("yellow", 1)  //return "red"
// trafficlightNextColors("red", 5)     //return "yellow green yellow red yellow"


function wtf(color, times) {
    colors = ['red','yellow','green','yellow'];
    stepsArr = [];
    curColor = colors.lastIndexOf(color);
    for(i = 0; i < times; i++) {
        curColor++;
        if(curColor === colors.length) curColor = 0;
        stepsArr.push(colors[curColor]);
    }
    return stepsArr.reduce((a,b) => a + ' ' + b);
}
console.log(wtf("green", 4));
console.log(wtf("yellow", 1));
console.log(wtf("red", 5));
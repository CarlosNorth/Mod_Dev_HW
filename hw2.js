// Задание 1
const frstName = "Дмитрий"; // Строки
const scndName = "Щербак";
const surName = "Алексеевич";
const yearOfBirth = "1989";
const currentYear = "2024";
let age = 0; //Числа
const job = true; // Булевые значения
const study = false;
age = parseInt(currentYear) - parseInt(yearOfBirth);
console.table({frstName, scndName, surName, yearOfBirth, currentYear, age, job, study})

//  Задание 2 (Самостоялка)
let age1 = 0;
const user = {
    frstName: 'Дмитрий',
    scndName: 'Щербак',
    surname: 'Алексеевич',
    yearOfBirth: '1989',
    currentYear: new Date().getFullYear() , 
    age: parseInt(new Date().getFullYear()) - parseInt(age1),
    study: false,
    working: true,
    
};
user.age1 = 35;
console.table(user); 
// function Name (a, b){
//     return a+b;
// }

// console.log(Name(10, 17));

// let a = Number(prompt("Enter number:"))

// let fnCall = (a)=>a*3;
// console.log(fnCall(a));

// let BobUser = {
//     userName: "Bob",
//     age:32,
//     isStudy: true,
//     skills: ['html']
// }
// console.log(BobUser.userName);

// (1. Even numbers) Створити функцію яка отримує массив і вибирає з нього всі парні числа, після чого розміщує в новому масиві. Функція повина повертати массив з парними номерами.

console.log("1) Even numbers");

function getArrayNum (){

    let n = 0;
    let number = NaN;
    let array = [];

    while(true){
        n++;
        text = String(prompt(`Fill the ${n} section of the array with a number:`));
        if(text == ""){
            break;
        }
        number = Number(text);
        text = String(number);
        if(text == "NaN"){
            break;
        }
        array.push(number);
    }

    return array;
}

function evenNumbers(array){

    let arrayResult = [];

    for(let i = 0; i < array.length; i++){
        if(array[i]%2===0){
            arrayResult.push(array[i]);
        }
    }
    return arrayResult;
}

let array = getArrayNum();

if(array.length > 0){
    console.log(`Before: ${array};\nAfter: ${evenNumbers(array).length > 0 ? evenNumbers(array) : "¯\_(ツ)_/¯"}.`);
}
else{
    console.log("¯\_(ツ)_/¯");
}

// (2. Get array) Створити функцію яка 3 рази виводить prompt  запитує що купити і вводить отримані данні в массив. Після цього повертає массив

console.log("2) Get array")

function getArrayStr (){

    let array = [];
    let n = 0;

    while(true){
        n++;
        text = String(prompt(`Enter string ${n}:`));
        if(text == "" || String(text) == "null"){
            break;
        }
        array.push(text);
        if(n>=3){
            break; // :)
        }
    }
    return array;    
}

array = getArrayStr();

console.log(`Result: ${array.length > 0 ? array : "¯\_(ツ)_/¯"}.`);

// (3. Sum from array) Напишіть функцію яка отримує як аргумент довільний  массив цифр і повертає сумму всіх значень массиву

console.log("3) Sum from array")

array = getArrayNum();

function sumArrayNum (array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result+=array[i];
    }
    return result;
}

console.log(`Sum from array:[${array}] = ${sumArrayNum(array)}.`);

// (4. Year of born) Створіть функцію з іменем congrat, яка отримує значення рік народження, а повертає вік користувача

console.log("4) Year of born");

function congrat(birth){
    return 2023-birth<2023 ? 2023-birth : "¯\_(ツ)_/¯";
}

console.log(`Congratulations!!! You are ${congrat(Number(prompt("Enter year of your born:")))} years old.`);

// (5. Years of borns) Створіть функцію яка отримує массив цифрових значень (різні роки) і колбек функцію яку ви створили congrat. Поверніть новий массив зі значенням "Вік користувача і розрахунок з колбек функції"

console.log("5) Years of borns");

function differentYears(array){
    let arrayResult = [];
    for(let i = 0; i < array.length; i++){
        arrayResult.push(congrat(array[i]));
    }
    return arrayResult.length>0 ? arrayResult : "¯\_(ツ)_/¯";
}

console.log(`Congratulations!!! You are ${differentYears(getArrayNum())} years old.`);

// 6) Створіть пустий обєкт productDetail і декілька викликів prompt які заповнять інформацію про товар (Назва продукту, ціна продукта, колір, наявність знижки) тут робота на знайомство з синтаксисом обєктів

let obj = {};

obj.product = String(prompt("Enter name of product:"));
obj.price = Number(prompt("Enter price of product:"));
obj.color = String(prompt("Enter color of product:"));
obj.discount = Number(prompt("Enter discount of product:"));

console.log(obj)

// 7) Створити функцію яка задає в обєкт cordinat рандомні значення left i top. Максимальне значення лефт це 1000 максимальне значення top це 100

let coordinates = {};

coordinates.left = Math.random()*1000;
coordinates.top = Math.random()*100;

console.log(coordinates);

// Трохи видохся, тому зробив коротко (￢_￢;)
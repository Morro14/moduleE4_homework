n = prompt('Enter a number:');
n = Number(n)
n += 1;
console.log(n);
switch (typeof n) {
    case "number":
        console.log("This is a number");
        if (n % 2 === 0) {
            console.log("This is an even number")
        } else {
            console.log("This is an uneven number")
        }
        break;
    case "string":
        console.log("This is a string");
        break;
    case "NaN":
        console.log("This is a NaN-type");
        break;
}


let str = prompt("Type in text to reverse it:");
let reverseString = str.split("").reverse().join("")
console.log(reverseString)

x = Math.floor(Math.random() * 101)


let arr = [1, 2, 3];
console.log(arr.length)


let arr = [1, 1, 1, 1];
let flag = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        console.log('Элементы массива не одинаковы');
        flag = false;
        break;
    }
}
if (flag === true) {
    console.log('Элементы массива одинаковы');
}


let arr = [1, 0, 'a', 4, 5];
let evenCount = 0;
let unevenCount = 0;
let nullCount = 0;
for (let i = 0; i < arr.length; i++) {
    switch (typeof arr[i]) {
        case "number":
            if (arr[i] === 0) {
                nullCount++
            } else if
                (arr[i] % 2 === 0) {
                evenCount++
            } else { unevenCount++ }
            break;
        case !"number":
            break;
    }
}

let result = `В массиве ${evenCount} четных, ${unevenCount} нечетных и ${nullCount} нулевых элементов`;
console.log(result);


let map = new Map([
    [1, 'number'],
    ['y', 'letter'],
    ['%', 'sign']
]
);


for (let elem of map) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}


function countEvenUneven(arr) {
    let evenCount = 0;
    let unevenCount = 0;
    let nullCount = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (typeof arr[i]) {
            case "number":
                if (arr[i] === 0) {
                    nullCount++
                } else if
                    (arr[i] % 2 === 0) {
                    evenCount++
                } else { unevenCount++ }
                break;
            case !"number":
                break;
        }
    }
    let result = `В массиве ${evenCount} четных, ${unevenCount} нечетных и ${nullCount} нулевых элементов`;
    console.log(result);
}


function primeNumCheck(num) {
    num = Number(num);
    if (num < 0 && num > 1000) {
        console.log("Incorrect number");
    }
    let prime = false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("The number is not prime");

            break;
        } else { prime = true }
    }
    if (prime == true) {
        console.log("The number is prime");
    }
}


// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
function getSumFunction(a) {
    return function (b) {
        return a + b
    }
};

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
function printInterval(a, b) {
    let step = 0;

    const intervalId = setInterval(function () {
        let num = a + step;
        console.log(num);
        if (num === b) {
            clearInterval(intervalId);
        }
        step++;
    }, 1000)

}

printInterval(4, 10)


// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
const powerFunction = (x, n) => console.log(x ** n);
powerFunction(2, 2)


// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
function showObjectKeys(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key, object.key);
        }
    }
}


// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
function checkObjectKey(str, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && key === str) {
            console.log('True');
        } else {
            console.log('False');
        }
    }
}

// Написать функцию, которая создает пустой объект, но без прототипа.
const emptyObj = Object.create(null)

// 
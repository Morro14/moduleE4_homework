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
let splitStr = str.split("");
let reverseArray = splitStr.reverse();
let joinArray = reverseArray.join("");
console.log(joinArray)

x = Math.floor(Math.random() * 101)



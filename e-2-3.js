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
    case "None":
        console.log("This is a None-type");
        break;
}
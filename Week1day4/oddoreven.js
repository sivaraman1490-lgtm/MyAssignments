
/*Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even*/

function checknumber(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}

checknumber(10);
checknumber(15);
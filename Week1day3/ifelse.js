function checkage(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote");
    }
}

checkage(20);
checkage(16);

function checknumber(num) {
    if (num % 2 === 0) {
        console.log(num + " is an even number");
    } else {
        console.log(num + " is an odd number");
    }
}

checknumber(10);
checknumber(15);

function checkgrade(grade) {
    if (grade >= 90) {
        console.log("You got an A");
    } else if (grade >= 80) {
        console.log("You got a B");
    } else if (grade >= 70) {
        console.log("You got a C ");
    } else {
        console.log("You got a D");
    }
}

checkgrade(95);
checkgrade(85);
checkgrade(75); 
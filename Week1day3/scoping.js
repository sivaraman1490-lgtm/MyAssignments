let y=60;
var a=10;
function test(){

    console.log('Accessing global variable inside function',a);
    console.log('Accessing global variable inside function',y);
}
test();
console.log('Accessing global variable outside function',a);
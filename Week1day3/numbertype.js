/*Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type*/


function number(num) 
{
    if(num>0)
    {
        console.log("The number is positive");
    }
    else if(num<0)
    {
        console.log("The number is not positive");
    }
    else if(num==0)
    {
        console.log("The number is zero");
    }
}
number(5);
number(-3);
number(0);
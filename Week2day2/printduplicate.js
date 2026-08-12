/*To print duplicate numbers in an array*/
let arr =[1,2,3,2,4,5,1,4,9,7];
console.log("Duplicate numbers in an array are:");
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) 
        {
            if (arr[i] === arr[j]) {
    
                console.log(arr[i]);
            }
        }
}
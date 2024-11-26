// Rest parameter 
//use to capture an indefnite number of arguments passed
//used with "..." in start of variable to make it a Rest/spread operator

function sum(...numbers: number[]): number{
    return numbers.reduce(
        (total,num) => total+num , 0
        )
}
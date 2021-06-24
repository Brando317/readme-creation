const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum (numbers)
{
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
sum += numbers[i]
    }
    return sum 
}
console.log(arraySum(numbers))
let sum3 = [1, 2, 10];


function getSumNumbers(numbers: number[]): number {
    let basket = 0;
    for (let number of numbers) {
        basket = basket + number;
    }
    return basket;
}

console.log(getSumNumbers(sum3));
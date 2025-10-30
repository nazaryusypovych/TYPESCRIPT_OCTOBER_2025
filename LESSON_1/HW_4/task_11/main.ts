let sum4 = [1, 2, 10];


let getSumNumbers4 = (numbers: number[]) => {
    let basket = 0;
    for (let number of numbers) {
        basket = basket + number;
    }
    return basket;
}

console.log(getSumNumbers4(sum4));
let arrayNumbers = [1, 2, 3, -1, 6, 0];


function getMinNumber(array: number[]) {
    let min: number = array[0];
    for (let arrayElement of array) {
        if (arrayElement < min ){
            min = arrayElement;
        }

    }
    return min;
}

console.log(getMinNumber(arrayNumbers));
let array4 = [1, 2, 3, `vova`, `nazar`];


let getArray4 = (array: any[]): void => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

getArray4(array4);
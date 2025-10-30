let array3 = [1, 2, 3, `vova`, `nazar`];


function getArray(array: any[]): void {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

getArray(array3);
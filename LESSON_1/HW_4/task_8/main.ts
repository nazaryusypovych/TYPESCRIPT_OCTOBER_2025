let getArrayLi4 = (array: any[]): void=> {
    document.write(`<lu>`);
    for (let element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</lu>`);
}
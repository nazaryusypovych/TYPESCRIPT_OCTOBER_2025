
type Primitive = boolean | string | number



function getArrayLi(arrayPrimitive: Primitive[]): void {
    document.write(`<lu>`);
    for (let element of arrayPrimitive) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</lu>`);
}

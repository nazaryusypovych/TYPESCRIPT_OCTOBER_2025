
let users4 = [
    {id: 1,name: `nazar`,age: 24},
    {id: 2,name: `vova`,age: 22}
];

type User4Type = {
    id: number, name: string, age: number
}


let getUser4 = (array: User4Type[]) => {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} -  ${arrayElement.age}</div>`);
    }
}

getUser4(users4);
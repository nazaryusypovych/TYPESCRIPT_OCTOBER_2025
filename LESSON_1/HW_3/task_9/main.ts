let users3 = [
    {id: 1,name: `nazar`,age: 24},
    {id: 2,name: `vova`,age: 22}
];


type User1Type = {id: number,name: string,age: number};


function getUser(array: User1Type[]): void {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} -  ${arrayElement.age}</div>`);
    }
}

getUser(users3);
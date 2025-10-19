let a: string = `hello okten`;


let num: number = 2;
let str: string = `dddd`;
let bool: boolean = true;


function foo(arg1: number, arg2: number): void{
    console.log(arg1, arg2);
}

function sum(arg1: number, arg2: number): number{
    return arg1 + arg2;

}


let arr: number[] = [];
arr.push(1, 2, 3);



//---------------------------


// let users: {name:string, age:number, status:boolean}[] = [
// {name: `vasya`, age: 31, status: false},
// {name: `petya`, age: 30, status: true},
// {name: `kolya`, age: 29, status: true},
// {name: `olya`, age: 28, status: false},
// {name: `max`, age: 30, status: true},
// {name: `anya`, age: 31, status: false},
// {name: `oleg`, age: 28, status: false},
// {name: `andrey`, age: 29, status: true},
// {name: `masha`, age: 30, status: true},
// {name: `olya`, age: 31, status: false},
// {name: `max`, age: 31, status: true}
//
// ];





//1)Тайп
// type UsersType = {
// name:string;
// age:number;
// status:boolean;
// greeting: (str: string) => string
//
// }
//
// let users: UsersType[] = [
// {name: `vasya`, age: 31, status: false, greeting:(str:string) => `hello`},
// {name: `petya`, age: 30, status: true, greeting:(str:string) => `hello2`},
//
// ];



//2)Інтерфейс
// interface IUsers {
// name:string;
// age:number;
// status:boolean;
// greeting: (str: string) => string
//
// }
//
// let users: IUser[] = [
// {name: `vasya`, age: 31, status: false, greeting:(str:string) => `hello`},
// {name: `petya`, age: 30, status: true, greeting:(str:string) => `hello2`},
//
// ];



//3)Клас
class User {
    name:string;
    age:number;
    status:boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;

    }

    greeting?: (str: string) => string

}



let user = new User(`kfjf`, 123, false);




let users: User[] = [

    {name: `vasya`, age: 31, status: false, greeting:(str:string) => `hello`},
    {name: `petya`, age: 30, status: true, greeting:(str:string) => `hello2`},
    new User(`ola`, 17, false)
];



console.log(`user`);
"use strict";
let a = `hello okten`;
let num = 2;
let str = `dddd`;
let bool = true;
function foo(arg1, arg2) {
    console.log(arg1, arg2);
}
function sum(arg1, arg2) {
    return arg1 + arg2;
}
let arr = [];
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
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
}
let user = new User(`kfjf`, 123, false);
let users = [
    { name: `vasya`, age: 31, status: false, greeting: (str) => `hello` },
    { name: `petya`, age: 30, status: true, greeting: (str) => `hello2` },
    new User(`ola`, 17, false)
];
console.log(`user`);

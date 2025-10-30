
type UserType = {
    name: string,
    age: number,
    status: boolean
}



let users1: UserType[] = [
    {name: `vasya`, age: 31, status: false},
    {name: `petya`, age: 30, status: true},
    {name: `kolya`, age: 29, status: true},
    {name: `olya`, age: 28, status: false},
    {name: `max`, age: 30, status: true},
    {name: `anya`, age: 31, status: false},
    {name: `oleg`, age: 28, status: false},
    {name: `andrey`, age: 29, status: true},
    {name: `masha`, age: 30, status: true},
    {name: `olya`, age: 31, status: false},
    {name: `max`, age: 31, status: true}

];

//  – користувачів зі статусом true
for (let user1 of users1) {
    if (user1.status === true){
        console.log(user);
    }
}

//  – користувачів зі статусом false
for (let user1 of users1) {
    if (user1.status === false){
        console.log(user);
    }
}

//  – користувачів, які старші за 30 років
for (let user1 of users1) {
    if (user1.age > 30){
        console.log(user);
    }
}
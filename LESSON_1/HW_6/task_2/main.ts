class User66 {





    constructor (private _id: number, private name: string, private surname: string, private email: string, private phone: number) {

    }

    get id (): number{
        return this._id
    }


}

let user1 = new User66(1, `nazar`, `ser`, `nazar@ukr.net`, 6245);
let user2 = new User66(2, `jak`, `hat`, `jac@ukr.net`, 8974);
let user3 = new User66(3, `pam`, `lio`, `pam@ukr.net`, 2587);
let user4 = new User66(4, `rayan`, `gaz`, `rayan@ukr.net`, 1472);
let user5 = new User66(5, `alan`, `nani`, `alan@ukr.net`, 5698);
let user6 = new User66(6, `roman`, `fan`, `roman@ukr.net`, 2236);
let user7 = new User66(7, `patrik`, `swan`, `patrik@ukr.net`, 6698);
let user8= new User66(8, `robert`, `hait`, `robert@ukr.net`, 3214);
let user9 = new User66(9, `sia`, `drak`, `siat@ukr.net`, 1142);
let user10 = new User66(10, `han`, `zag`, `han@ukr.net`, 5565);


let users66: User66[] = [];

users66.push(user1);
users66.push(user2);
users66.push(user3);
users66.push(user4);
users66.push(user5);
users66.push(user6);
users66.push(user7);
users66.push(user8);
users66.push(user9);
users66.push(user10);

console.log(users66);

let filterUser7 = users66.filter(value => value.id %2 === 0);
console.log(filterUser7);

let sortUser7 = users66.sort((a, b) => b.id - a.id);
console.log(sortUser7);
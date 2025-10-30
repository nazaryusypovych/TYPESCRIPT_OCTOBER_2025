class Client {


    constructor(private id: number, private name: string, private surname: string, private email: string, private phone: number, private _order: {title: string, price: number}[]) {
    }

    get order(): {title: string, price: number}[]{
        return this._order
    }

}

let clients: Client[] = [

    new Client(1, `nazar`, `ser`, `nazar@ukr.net`, 6245, [{title: `tv`, price: 10258}, {title: `phone`, price: 15879}]),
    new Client(2, `jak`, `hat`, `jac@ukr.net`, 8974, [{title: `computer`, price: 30987}, {title: `phone`, price: 15879}]),
    new Client(3, `pam`, `lio`, `pam@ukr.net`, 2587, [{title: `computer`, price: 40987}]),
    new Client(4, `rayan`, `gaz`, `rayan@ukr.net`, 1472, [{title: `phone`, price: 6879}]),
    new Client(5, `alan`, `nani`, `alan@ukr.net`, 5698, [{title: `phone`, price: 25987}]),
    new Client(6, `roman`, `fan`, `roman@ukr.net`, 2236, [{title: `tv`, price: 9258}, {title: `phone`, price: 21889}]),
    new Client(7, `patrik`, `swan`, `patrik@ukr.net`, 6698, [{title: `tv`, price: 8258}, {title: `phone`, price: 9889}]),
    new Client(8, `robert`, `hait`, `robert@ukr.net`, 3214, [{title: `phone`, price: 9889}]),
    new Client(9, `sia`, `drak`, `siat@ukr.net`, 1142, [{title: `phone`, price: 18887}]),
    new Client(10, `han`, `zag`, `han@ukr.net`, 5565, [{title: `phone`, price: 8741}])

]


console.log(clients);


let sortClients = clients.sort((a, b) => b.order.length - a.order.length);
console.log(sortClients);
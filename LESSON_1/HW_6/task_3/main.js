var Client = /** @class */ (function () {
    function Client(id, name, surname, email, phone, _order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this._order = _order;
    }
    Object.defineProperty(Client.prototype, "order", {
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
var clients = [
    new Client(1, "nazar", "ser", "nazar@ukr.net", 6245, [{ title: "tv", price: 10258 }, { title: "phone", price: 15879 }]),
    new Client(2, "jak", "hat", "jac@ukr.net", 8974, [{ title: "computer", price: 30987 }, { title: "phone", price: 15879 }]),
    new Client(3, "pam", "lio", "pam@ukr.net", 2587, [{ title: "computer", price: 40987 }]),
    new Client(4, "rayan", "gaz", "rayan@ukr.net", 1472, [{ title: "phone", price: 6879 }]),
    new Client(5, "alan", "nani", "alan@ukr.net", 5698, [{ title: "phone", price: 25987 }]),
    new Client(6, "roman", "fan", "roman@ukr.net", 2236, [{ title: "tv", price: 9258 }, { title: "phone", price: 21889 }]),
    new Client(7, "patrik", "swan", "patrik@ukr.net", 6698, [{ title: "tv", price: 8258 }, { title: "phone", price: 9889 }]),
    new Client(8, "robert", "hait", "robert@ukr.net", 3214, [{ title: "phone", price: 9889 }]),
    new Client(9, "sia", "drak", "siat@ukr.net", 1142, [{ title: "phone", price: 18887 }]),
    new Client(10, "han", "zag", "han@ukr.net", 5565, [{ title: "phone", price: 8741 }])
];
var client1 = new Client(1, "nazar", "ser", "nazar@ukr.net", 6245, [{ title: "tv", price: 10258 }, { title: "phone", price: 15879 }]);
var ClientManedger = /** @class */ (function () {
    function ClientManedger() {
        this.clients = [];
    }
    ClientManedger.prototype.regesterClient = function (newClient) {
        this.clients.push(newClient);
    };
    ClientManedger.prototype.getClients = function () {
        return this.clients;
    };
    return ClientManedger;
}());
var manager1 = new ClientManedger();
manager1.regesterClient(client1);
console.log(manager1);
console.log(manager1.getClients());
console.log(clients);
var sortClients = clients.sort(function (a, b) { return b.order.length - a.order.length; });
console.log(sortClients);

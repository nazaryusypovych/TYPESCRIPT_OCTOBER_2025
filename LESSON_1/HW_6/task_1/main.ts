class User6 {


    id: number;
    name: string;
    surname: string;
    email: string;
    phone: number;



    constructor (id: number, name: string, surname: string, email: string, phone: number) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    }


}




let users6: User6[] = [
    new User6(1, `nazar`, `ser`, `nazar@ukr.net`, 6245),
    new User6(2, `jak`, `hat`, `jac@ukr.net`, 8974),
    new User6(3, `pam`, `lio`, `pam@ukr.net`, 2587),
    new User6(4, `rayan`, `gaz`, `rayan@ukr.net`, 1472),
    new User6(5, `alan`, `nani`, `alan@ukr.net`, 5698),
    new User6(6, `roman`, `fan`, `roman@ukr.net`, 2236),
    new User6(7, `patrik`, `swan`, `patrik@ukr.net`, 6698),
    new User6(8, `robert`, `hait`, `robert@ukr.net`, 3214),
    new User6(9, `sia`, `drak`, `siat@ukr.net`, 1142),
    new User6(10, `han`, `zag`, `han@ukr.net`, 5565),


];



console.log(users6);



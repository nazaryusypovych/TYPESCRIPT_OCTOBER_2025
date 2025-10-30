class Cinderella {


    name: string;
    age: number;
    sizeFoot: number;



    constructor(name: string, age: number, sizeFoot: number) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let cinderellas: Cinderella[] = [
    new Cinderella(`anna`, 21, 31),
    new Cinderella(`alla`, 28, 32),
    new Cinderella(`eva`, 25, 33),
    new Cinderella(`diana`, 27, 34),
    new Cinderella(`katya`, 24, 35),
    new Cinderella(`fiona`, 28, 36),
    new Cinderella(`nina`, 23, 37),
    new Cinderella(`tina`, 26, 38),
    new Cinderella(`jesika`, 27, 39),
    new Cinderella(`yana`, 28, 40),

]

console.log(cinderellas);


class Prince {
    name: string;
    age: number;
    sizeFind: number;
    wife?: Cinderella;



    constructor(name: string, age: number, sizeFind: number) {

        this.name = name;
        this.age = age;
        this.sizeFind = sizeFind;
    }
}

let prince: Prince = new Prince(`nazar`, 25, 37);

console.log(prince);



for (const cinderella of cinderellas) {
    if (cinderella.sizeFoot === prince.sizeFind){
        prince.wife = cinderella;
    }
}

console.log(prince);

let findCinderella = cinderellas.find(value => value.sizeFoot === prince.sizeFind);
console.log(findCinderella);
class Car {

    model: string;
    producer: string;
    maxSpeed: number;
    EngineVolume: number;
    driverOfCar?: {name: string, age: number}[]



    constructor(model: string, producer: string, year: number, maxSpeed: number, EngineVolume: number) {

        this.model = model;
        this.producer = producer;
        this.maxSpeed = maxSpeed;
        this.EngineVolume = EngineVolume;

    }


    drive (): void{
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info (): void {
        for (const element in this) {
            console.log(element, this[element]);
        }
    }

    increaseMaxSpeed (newSpeed: number): void {
        this.maxSpeed = newSpeed;
    }

    changeYear (newValue: number): void {
        this.EngineVolume = newValue;
    }

    addDriver (driver: {name: string, age: number}[]): void {
        this.driverOfCar = driver;
    }

}

let car: Car = new Car (`bmw`, `bmw-company`, 2015, 250, 2.5);
console.log(car);

car.drive();

car.info();

car.increaseMaxSpeed(260);
console.log(car);

car.changeYear(2020);
console.log(car);

car.addDriver([{name: 'nazar', age: 25}]);
console.log(car);
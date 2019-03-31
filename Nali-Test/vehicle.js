export class Vehicle {

    constructor() {}

    numberOfWheels() {
        return -1;
    }

    engineType() {

    }
    
}

class Car extends Vehicle {

    constructor(numberOfDoors) {
        this.numberOfWheels = 4;
        this.numberOfDoors = numberOfDoors;
    }

    static getSpeed() {
        return this.numberOfDoors * 60 * .2;
    }

}

var car1 = new Car(4);
car1.getSpeed();
var car2 = new Car(2);
car2.getSpeed();
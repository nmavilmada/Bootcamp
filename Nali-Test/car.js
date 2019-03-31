import { Vehicle } from './vehicle';

export class Car extends Vehicle {

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    numberOfWheels() {
        return 4;
    }

    numberOfCylinders() {
        return 4;
    }
    
}
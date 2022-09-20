"use strict";
class Scooter {
    constructor(brand, model, name) {
        this.brand = brand;
        this.model = model;
        this.name = name;
    }
    handleIsRunning(isRunning) {
        this.isRunning = isRunning;
    }
}
const scooter = new Scooter('Power', 'teen', 'blue power');
scooter.handleIsRunning(true);
console.table(scooter);

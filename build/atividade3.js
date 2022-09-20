"use strict";
class Patient {
    constructor(id, name) {
        this.drugs = [];
        this.id = id;
        this.name = name;
    }
    receivedMedicine(medicine) {
        this.drugs.push(medicine);
    }
}
const patient = new Patient('231313', 'weslley');
patient.receivedMedicine('Dipirona');
console.table(patient);

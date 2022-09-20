class Patient {
    private id: string;
    private name: string;
    private drugs: string[] = [];


    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public receivedMedicine(medicine: string) {
        this.drugs.push(medicine);
    }

}

const patient = new Patient('231313', 'weslley');

patient.receivedMedicine('Dipirona');

console.table(patient);
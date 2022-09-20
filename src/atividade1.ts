class Scooter {
    private brand: string;
    private model: string;
    private name: string;
    private isRunning: boolean;


    constructor(brand: string, model: string, name: string) {
        this.brand = brand;
        this.model = model;
        this.name = name;
    }

    public handleIsRunning(isRunning: boolean) {
        this.isRunning = isRunning;
    }
}

const scooter = new Scooter('Power', 'teen', 'blue power');

scooter.handleIsRunning(true);


console.table(scooter);
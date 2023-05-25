class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    startEngine() {
        this.isRunning = true;
        alert("Engine Started...");
    }
    stopEngine() {
        this.isRunning = false;
        alert("Engine Stopped...");
    }
}
let myCar = new Car("Toyota", "Camry", 2022);
alert(myCar.make);
alert(myCar.model);
alert(myCar.year);
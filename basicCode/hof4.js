const car = {
    type: "Fiat",
    model: "500",
    color: "Red",
    drive: function() {
        return this.type + "is now in drive!";
    }
};{
console.log(car.drive()); }
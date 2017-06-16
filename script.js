function Phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
};
Phone.prototype.printInfo = function() {
    console.log("The phone is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.cameraInfo = function() {
    console.log("Camera in the " + this.brand + " has " + this.camera + ".")
}

var iPhone6S = new Phone("Apple", 2250, "silver", "12 MPx");
var samsungGalaxyS6 = new Phone("Samsung", 1890, "black", "16 MPx");
var onePlusOne = new Phone("OnePlus", 2300, "black", "13 MPx");

iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.printInfo();

samsungGalaxyS6.cameraInfo();
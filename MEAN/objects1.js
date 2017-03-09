function VehicleConstructor(name,wheels,passengers, noise){

  var vehicle = {}; //object to be returned
  //properties of vehicle
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.noise = noise;

  vehicle.vehicleNoise = function() {
    console.log(vehicle.noise);
  }

  vehicle.pickup = function(x) {
    vehicle.passengers += x;
    console.log(vehicle.passengers);
    //number of passengers is added to exsisting passengers
  }
  return vehicle;
}
var Bike = VehicleConstructor("Bike", 2, 1, "ring ring!");
Bike.vehicleNoise();
var Sedan = VehicleConstructor("Sedan", 4, 5, "Honk Honk!");
Sedan.vehicleNoise();
var Bus = VehicleConstructor("Bus", 4, 30, "BUS NOISES");
Bus.pickup(5);

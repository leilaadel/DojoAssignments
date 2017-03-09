function VehicleConstructor(name,wheels,passengers, noise, speed){

  // var vehicle = {}; //object to be returned
  //properties of vehicle
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.noise = noise;
  this.speed = speed;
  var distance_traveled = 0;
  this.vin = createVin();
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

  function createVin(){
   var vin = '';
   for (var i = 0; i < 17; i+=1 ){
     // Use Math.floor and Math.random to generate random index to access character from char string
     vin += chars[Math.floor(Math.random()*35)];
   }
   return vin;
  }
  VehicleConstructor.prototype.vehicleNoise = function() {
    console.log(this.noise);
  }

  VehicleConstructor.prototype.pickup = function(x) {
    this.passengers += x;
    console.log(this.passengers);
    //number of passengers is added to exsisting passengers
  }

  VehicleConstructor.prototype.updateDistanceTraveled = function(){
    distance_traveled += this.speed;
  }
  VehicleConstructor.prototype.move = function(){
    this.updateDistanceTraveled();
    this.vehicleNoise();
  }
  VehicleConstructor.prototype.checkMiles = function(){
    console.log(distance_traveled);
  }
}
var Bike = new VehicleConstructor("Bike", 2, 1, "ring ring!",5);
Bike.vehicleNoise();
Bike.move();
Bike.move();
Bike.checkMiles();
var Sedan = new VehicleConstructor("Sedan", 4, 5, "Honk Honk!",20);
Sedan.vehicleNoise();
var Bus = new VehicleConstructor("Bus", 4, 30, "BUS NOISES",10);
Bus.pickup(5);

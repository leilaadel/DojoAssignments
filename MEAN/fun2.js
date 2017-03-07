function sum(x, y){
  var sum = 0;
  for(var i = x; i<y+1;i++){
    sum = sum+i;
  }
  console.log(sum);
}

function min(x){
  var min = x;
  for(var i = 0; i < x.length; i++){
      if(min<arr1[i]){
        min = arr1[i]
      }
  }
  return min;
}

function average(x){
  var avg = 0;
  for(var k = 0; k < x.length; k++){
      avg = avg + arr2[k];
  }
  avg = avg/x.length;
  return avg;
}

var person = {
  name: "Leila Adel",
  distanced_traveled: 0,
}

var say_name = person.name;
function say_something(x){
  console.log(say_name+"says"+x)
}

say_something("I am cool");

function walk(){
  console.log(say_name+"is walking");
  person.distanced_traveled = person.distanced_traveled + 3;
}
function run(){
  console.log(say_name+"is running");
  person.distanced_traveled = person.distanced_traveled + 10;
}
function crawling(){
  console.log(say_name+"is crawling");
  person.distanced_traveled = person.distanced_traveled + 1;
}

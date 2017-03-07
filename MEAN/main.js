var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for(var i = 0; i<x.length; i++){
  console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
var sum = 0;
for(var j = 1; j<501; j++){
  sum = sum + j;
}
console.log(sum);
var arr1 = [1, 5, 90, 25, -3, 0];
var arr2 = [1, 5, 90, 25, -3, 0];
//minimum value
var min = arr1[0];
for(var k = 0; k < arr1.length; k++){
    if(min<arr1[k]){
      min = arr1[k]
    }
}
console.log(min);
//average
var avg = 0;
for(var k = 0; k < arr2.length; k++){
    avg = avg + arr2[k];
}
avg = avg/arr2.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
// for(var i = 0; i < newNinja.length; i++){
//   console.log(newNinja[i]);
// }
for (var key in newNinja) {
  if (newNinja.hasOwnProperty(key)) {
    console.log(key + " -> " + newNinja[key]);
  }
}
console.log('the end')

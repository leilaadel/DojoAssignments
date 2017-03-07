function runningLogger(){
  console.log('I am running!')
}
runningLogger();
function multiplyByTen(x){
  var mult;
  mult = x*10;
  return mult;
}
multiplyByTen(5);

function stringReturnOne(){
  console.log("wassup this is string one");
}
stringReturnOne();
function stringReturnTwo(){
  console.log("how you do this is string two");
}
stringReturnTwo();

function caller(y){
  if (typeof y === 'function'){
    console.log("nothing is returned");
  }
}
caller(runningLogger());

function myDoubleConsoleLog(a,b){
  if (typeof a === 'function'){
    console.log(a);
  if (typeof b === 'function'){
    console.log(b);
}
myDoubleConsoleLog(multiplyByTen(2),multiplyByTen(6));

function caller2(c){
  console.log("starting")
  setTimeout(caller2, 2000)
  if (typeof c === 'function'){
    console.log("ending?");
  }
  return "interesting"
}

caller2(myDoubleConsoleLog(multiplyByTen(2),multiplyByTen(6)));

function action(a,b,callback){
    var c = a+b;
    var d = a-b;
   callback(c,d);
}
function print(c,d){
    console.log(c,d);
}
function multiply(c,d){
    console.log('multiply ' +c*d);
}
function division(c,d){
    console.log('divided ' + c/d);
}
action(10,5,print);
action(10,5,multiply);
action(10,5,division);

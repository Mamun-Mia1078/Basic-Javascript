var x = 55;
function test(){
    var x = 66;
function nested(){
    var y= 333; //accessable only boundary
    console.log(x);
    
}

nested()
}
test()

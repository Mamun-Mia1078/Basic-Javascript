var nam = ['Mamun','Masud','Farid','Hallal','Rashed'];
function traverse(nam,callback){
    for(var i=0;i<nam.length; i++){
        callback(nam[i])
    }
}
traverse(nam,function(nam){
    console.log(nam.toUpperCase())
});
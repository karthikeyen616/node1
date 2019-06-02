//normal function statement
function hi(){
    console.log("sdsd");
}
hi();
//function expression
var say=function(){
console.log('bye');
};
say();
function callfunction(fun){
    fun();
}
callfunction(say);
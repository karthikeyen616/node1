var time=0;
var timer=setInterval(function(){
    time+=2;
console.log(time);
if(time>5){
    clearInterval(timer);
}
},1000);
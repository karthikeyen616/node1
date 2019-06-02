var express=require('express');
var app= express();

app.get('/',function(req,res){
    res.send("this is homepage");
})
app.get('/contact',function(req,res){
    res.send("this is contact page");
})

app.get('/pro/:name', function(req,res){
res.send('You requested to see a profile with the id of'+req.params.name);
})
app.listen(3000);
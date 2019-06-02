var express=require('express');
var app= express();
app.set('view engine','ejs');
app.use('/assets',express.static('assets'))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.get('/contact',function(req,res){
    console.log(req.query);
    res.render('profile',{qs:req.query});
})
// app.get('/contact/:name',function(req,res){
//     res.render('profile',{person:req.params.name});
// })


app.listen(3000);
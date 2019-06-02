var fs=require('fs');
fs.mkdir('stuff1',function(){
    fs.readFile('read.txt','utf8',function(err,data){
        fs.writeFile('./stuff1/g.txt',data);
    })
})
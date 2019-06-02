var http=require('http');
var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname+'/read.txt','utf8');
var mywritestream=fs.WriteStream(__dirname+'/wr.txt');
myReadStream.on('data',function(chunk){
    console.log('new chunck recieved');
    console.log(chunk);
    mywritestream.write(chunk);
})
var fs=require('fs');

fs.readFile('read.txt','utf8',function(err,data){
    console.log(data);
    fs.writeFile('writefile.txt',data);
});

console.log('test');
//fs.writeFileSync('heloooooooooooooo.txt',readMe);
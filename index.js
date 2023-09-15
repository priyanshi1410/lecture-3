const http = require('http');

const fs= require('fs');

const server =http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("welcome to the server");
    }
    else if (req.url=="/index"){
        res.end("welcome to the index page");
    }
    else if (req.url=="/blog"){
     res.end ("Welcome to the blog page");
    }
    else if (req.url=="/contact page"){
        res.end ("Welcome to the contact page");
    }
    else if (req.url=="/login"){
        fs.readFile("login.html",(err, data)=>{
            if (err) throw err;
            res.end (data)
        });
    }
})

server.listen(1809,()=>{
    console.log('starting server on port 1809');
})
const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.write("<h1>I am Srushti,this is simple http server...<h1>");
        res.end();
    }

    if(req.url==="/source-code"){
        res.setHeader("Content-Type","text/palin");
        res.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        res.end();
    }
});

const port=3000;
server.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
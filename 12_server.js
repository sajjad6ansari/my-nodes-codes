const http=require("node:http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World !!!!");
    console.log(req);
});

server.listen(3000,()=>{
    console.log("server is running on the port no. 3000");
})
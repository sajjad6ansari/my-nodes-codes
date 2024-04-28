const http=require("node:http");

const server=http.createServer((req,res)=>{
    superHero={
        firstName:"Bruce",
        lastName:"Wayne",
    }
    res.writeHead(200,{"Content-Type":"html"});
    res.end(JSON.stringify(superHero));
    console.log(req);
});

server.listen(3000,()=>{
    console.log("server is running on the port no. 3000");
})
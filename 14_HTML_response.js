const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});

    // res.end("<h2>Hello there !!!!</h2>");

    // const html=fs.readFileSync("./13_index.html","utf-8")
    // res.end(html);

    fs.createReadStream("./13_index.html").pipe(res);
});

server.listen(3000,()=>{
    console.log("server is running on the port no. 3000");
})
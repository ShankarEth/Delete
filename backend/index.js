
const EventEmitter = require("events");
const http = require("http");
const events = new EventEmitter();

events.on("f1",()=>{
    console.log("Function 1 excuted");
    events.emit("f2");
})

events.on("f2",()=>{
    console.log("function 2 executed");
})

events.emit("f1");
http.createServer((req,res) => {
    res.end("Hello Node JS");
}).listen(4500,()=>{
    console.log("Server started");
})

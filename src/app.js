const express= require('express');
const app = express();

app.use("/",(req,res)=>{
    res.send("Hi from vishal");
});

app.use("/test",(req,res)=>{
    res.send("Test from vishal");
});

app.use("/hello",(req,res)=>{
    res.send("Hello from vishal");
});

app.listen(7777,()=>{
    console.log("Server up and Running and listening on port 7777....");
})
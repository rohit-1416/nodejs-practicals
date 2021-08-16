const express = require('express');
const app =express();
const path = require('path');

const staticPath =path.join(__dirname,"../public");

// built in middleware
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    // res.write("hello to / <br>");
    // res.write();
    // res.send("<h1>hello to / Again </h1>");


});

app.get("/API",(req,res)=>{
res.json([{
    name_:"rohit",
    age:10
    }
    ]);
});


app.listen(8080,()=>{
    console.log("listning...")
})
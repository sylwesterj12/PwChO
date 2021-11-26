const express = require("express")

var data =new Date(); 
const app=express();

    app.get("/",(req,res)=>{
        res.send('docker Data: '+data.getDay()+'-'+data.getMonth()+'-'+data.getFullYear())});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Data uruchomienia ${data} \nJalocha Sylwester Port: ${port}` ));
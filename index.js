const express=require('express');


//app setup

const app=express();
const server=app.listen(4000, ()=>{
    console.log("app is lisnten on 4000 port");
});


const express = require("express");
const app=express();
const port =3001;


const { getRobot, getRobotById } = require("./controllers/robot.controller");

app.get("/",getRobot);

app.get("/:id",getRobotById);



app.listen(port,()=>{

    console.log("ahora si");
    console.log(`conectado exitosamente: ${port}`);
})
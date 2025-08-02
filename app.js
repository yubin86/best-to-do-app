import express from "express";

const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req,res)=> res.send("welcome"));

async function start(){
    app.listen(port, ()=> console.log(`Server listening on port: ${port}`));
}

start();

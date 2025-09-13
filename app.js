import express from "express";
import todos from "./routes/todos.js";
import cors from "cors"

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.get("/", (req,res)=> res.send("welcome"));

app.use("/api/todos", todos);

async function start(){
    app.listen(port, ()=> console.log(`Server listening on port: ${port}`));
}

start();

import express from "express";
import {
    createTodo, 
    deleteTodo, 
    getTodo, 
    getTodos, 
    updateTodo 
} from "../controller.js";

const todos = express.Router();
todos.route("/").post(createTodo).get(getTodos);
todos.route("/todo/:todoId").delete(deleteTodo).patch(updateTodo).get(getTodo);

export default todos;

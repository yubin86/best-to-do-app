import { eq } from "drizzle-orm";
import { db } from "./db.js";
import { todos as todosTable } from "./schemas/todos.js";

export async function createTodo(req, res) {
    const newUser = req.body;
    console.log(newUser);
    try{
        const user = await db.insert(todosTable).values(newUser);
    } catch (err) {
        console.log(err);
    }
    res.send("create todo!");
}
export async function getTodos(req, res) {
    const todos = await db.select().from(todosTable);
    res.send(todos);
}
export async function deleteTodo(req, res) {
    const todoId = req.params.todoId;
    const deleteTodo = await db
        .delete(todosTable)
        .where(eq(todosTable.todoId, todoId));
    res.send("delete todo!");
}
export async function updateTodo(req, res) {
    const todoId = req.params.todoId;
    const newData = req.body;
    const updateTodo = await db
        .update(todosTable)
        .set({title: newData.title, description: newData.description })
        .where(eq(todosTable.todoId, todoId));
    res.send("update todo!");
}
export async function getTodo(req, res) {
    const todoId = req.params.todoId;
    const todo = await db
        .select()
        .from(todosTable)
        .where(eq(todosTable.todoId, todoId));
    res.send(todo);
}

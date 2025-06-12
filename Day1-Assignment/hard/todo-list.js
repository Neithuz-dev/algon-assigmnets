/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
const prompt = require('prompt-sync')();
class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      console.log("Invalid index. Cannot remove.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Invalid index. Cannot update.");
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return "Invalid index.";
    }
  }

  clear() {
    this.todos = [];
  }
}
const myTodo = new Todo();

const n = Number(prompt("How many todos do you want to add"));
for (let i = 0; i < n; i++) {
  const todo = prompt(`Enter todo ${i + 1}: `);
  myTodo.add(todo);
}
console.log("All Todos:", myTodo.getAll());

const updateIndex = Number(prompt("Enter index to update it start from 0: "));
const updatedText = prompt("Enter updated todo: ");
myTodo.update(updateIndex, updatedText);
console.log("Todos after update:", myTodo.getAll());

const getIndex = Number(prompt("Enter index to get: "));
console.log("Todo at index:", myTodo.get(getIndex));

const removeIndex = Number(prompt("Enter index to remove: "));
myTodo.remove(removeIndex);
console.log("Todos after removing:", myTodo.getAll());

const clearConfirm = prompt("Do you want to clear all todos? (yes/no): ");
if (clearConfirm.toLowerCase() === "yes") {
  myTodo.clear();
  console.log("All todos cleared:", myTodo.getAll());
} else {
  console.log("Todos were not cleared.");
  let continueApp = prompt("Do you want to continue using the Todo App? (yes/no): ");
  
  if (continueApp.toLowerCase() === "yes") {
    let moreCount = parseInt(prompt("How many more todos do you want to add? "));
    for (let i = 0; i < moreCount; i++) {
      let newTask = prompt(`Enter todo ${i + 1}: `);
      myTodo.add(newTask);
    }
    console.log("Updated Todo List:", myTodo.getAll());
  } else {
    console.log("Exiting Todo App. Goodbye!");
  }
}
module.exports = Todo;

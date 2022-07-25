import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
 const [list, setList] = useState(TASKS);

 const updateTasks = (newTask) => {
    setList([...list, newTask])
   
 }

 const filteredTask = (category) => {
 
  if(category === "All"){
    return setList(TASKS)
  }
  else {
    const newTasks = TASKS.filter(task => task.category === category);
    setList(newTasks);
  }

 }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={filteredTask} />
      <NewTaskForm onTaskFormSubmit={updateTasks} categories={CATEGORIES} />
      <TaskList tasks={list} />
    </div>
  );
}

export default App;

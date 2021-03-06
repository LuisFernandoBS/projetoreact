import react, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks,setTask] = useState([
    {
      id:'1',
      title:'Estudar React.js',
      completed:false,
    },
    {
      id:'2',
      title:'Estudar Asp.net',
      completed:true
    }
  ]);

  const handlerTaskAddition = (taskTitle) =>{
    const newTask = [
      ...tasks,
      {
        id:uuidv4(),
        title:taskTitle,
        completed:false,
      },
    ];

    setTask(newTask);
  };

  const handlerTaskClick = (taskId) => {
    const newTask = tasks.map((task) =>{
      if (task.id == taskId) {
        return {...task,completed:!task.completed};
      }
      return task;
    });

    setTask(newTask);
  };

  const handlerRemoveTaskClick = (taskId) => {
    const newTask = tasks.filter((task) =>{
        return taskId != task.id;
    });

    setTask(newTask);
  };

  return (
    <>
      <div className="container">
        <AddTask handlerTaskAddition={handlerTaskAddition}/>
        <Tasks tasks={tasks} handlerTaskClick={handlerTaskClick} handlerRemoveTaskClick={handlerRemoveTaskClick} />
      </div>
    </>
  )
};

export default App; 

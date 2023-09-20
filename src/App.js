import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

import { ToDoList } from "./components/ToDoList";
import { useState, useEffect, createContext } from "react";
import { AddItem } from "./components/AddItem";


export const ArrayList = createContext();

function App() {
  let listArr = JSON.parse(localStorage.getItem("todolist"));
  const [array, setArray] = useState(listArr ? listArr : []);
  let idForList = JSON.parse(localStorage.getItem("idForList"));
  let [id, setId] = useState(idForList ? idForList : 0);

  useEffect(() => {
    console.log("here");
    localStorage.setItem("todolist", JSON.stringify(array));
  }, [array]);

  useEffect(() => {
    localStorage.setItem("idForList", JSON.stringify(id));
  }, [id]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ArrayList.Provider value={{ array, setArray, id, setId }}>
        <AddItem />
        <ToDoList />
      </ArrayList.Provider>
    </div>
  );
}

export default App;

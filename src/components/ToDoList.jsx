import { ToDoItem } from "./ToDoItem";
import { useContext, useEffect } from "react";
import { ArrayList } from "../App";

export const ToDoList = () => {
  const { array } = useContext(ArrayList);

  return (
    <div className="list-container">
      {array.map((value) => 
        <ToDoItem key={value.id} id={value.id} name={value.name} isDone={value.isDone} />
      )}
    </div>
  );
};

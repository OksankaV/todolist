import { useContext, useEffect, useState } from "react";
import { ArrayList } from "../App";

export const AddItem = () => {
  const {array, setArray, id, setId} = useContext(ArrayList);
  const [newItem, setItem] = useState("");

  useEffect(() => {
    if (newItem) {
      setArray([...array, { id: id, name: newItem, isDone: false }]);
      setId(id + 1);
    }
  }, [newItem]);

  return (
    <div className="add-item-container">
      <input id="newItem"></input>
      <button
        className="add-button"
        onClick={() => {
          setItem(document.getElementById("newItem").value);
          document.getElementById("newItem").value = "";
        }}
      >
        Add to list
      </button>
    </div>
  );
};

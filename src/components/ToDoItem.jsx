import { useContext, useEffect, useState } from "react";
import { ArrayList } from "../App";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

export const ToDoItem = ({ id, name, isDone }) => {
  const [cssClass, setClass] = useState(isDone);
  const { array, setArray } = useContext(ArrayList);
  const [inputValue, setValue] = useState(name);

  const [isEditable, setEditable] = useState(false);

  function saveNewItem(event) {
    const currentItem = document.getElementById("item-id-" + id).firstChild;
    setEditable(!isEditable);

    array.forEach((item) => {
      if (item.id == id) {
        item.name = currentItem.value;
      }
    });
    return [...array];
  }

  return (
    <div id={"item-id-" + id} className="item-row">
      {!isEditable && (
        <h2
          className={cssClass ? "item-done" : "item"}
          onClick={(event) => {
            event.currentTarget.activeElement
              ? setClass(cssClass)
              : setClass(!cssClass);
            array.forEach((item) => {
              if (item.id == id) {
                item.isDone = !cssClass;
              }
            });
            setArray([...array]);
          }}
        >
          {name}
        </h2>
      )}
      {isEditable && (
        <input
        className="item-input"
          type="text"
          value={inputValue}
          onChange={(event) => setValue(event.target.value)}
        ></input>
      )}
      <div className="item-buttons">
        {isEditable && (
          <button
            className="save-button"
            onClick={(event) => setArray(saveNewItem(event))}
          >
            <FontAwesomeIcon icon={faFloppyDisk} style={{ color: "#ffffff" }} />
            Save
          </button>
        )}
        {!isEditable && (
          <button onClick={() => setEditable(!isEditable)}>
            <FontAwesomeIcon icon={faPen} style={{ color: "#ffffff" }} /> Edit
          </button>
        )}
        <button
          onClick={() => setArray(array.filter((item) => item.id !== id))}
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} /> Delete
        </button>
      </div>
    </div>
  );
};

//Item.js
import React from "react";
// import style from "./Items.module.css";
function Item({ todos, 삭제함수 }) {
  return (
    <ul className="todoList">
      {todos.map((todos) => {
        return (
          <div>
            <li key={todos.id}>{todos.title}</li>
            <button onClick={삭제함수(todos.id)}>삭제</button>
          </div>
        );
      })}
    </ul>
  );
}

export default Item;

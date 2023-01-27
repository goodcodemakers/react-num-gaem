// //app.js
// import "./App.css";
// import uuid from "react-uuid";
// import React, { useState } from "react";
// import Items from "./components/Item";

// function App() {
//   //할일 목록 변수
//   const [todos, setTodos] = useState([
//     { id: 0, title: "할일" },
//     { id: 1, title: "할일" },
//     { id: 2, title: "할일" },
//   ]);
//   const [input, setInput] = useState("");

//   const 인풋 = (e) => {
//     setInput(e.target.value);
//   };

//   const 추가함수 = (e) => {
//     let newList = { id: uuid(), title: input };
//     let copy = [...todos, newList];

//     setTodos(copy);
//   };
//   //글 삭제 함수
//   const 삭제함수 = (id) => {
//     console.log("삭제함수실행");
//     console.log(id);
//     //해당하는 아이디 가 필요함
//   };

//   return (
//     <div className="App">
//       <h1>Todo list</h1>
//       <Items todos={todos} 삭제함수={삭제함수} />

//       <label>
//         입력값
//         <input type="text" name="todo" onChange={인풋} />
//         <button onClick={추가함수}>보내기</button>
//       </label>
//     </div>
//   );
// }

// export default App;

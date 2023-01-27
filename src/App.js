//app.js
import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [val, setVal] = useState(""); //사용자 입력값
  const [answer, setAnswer] = useState(0); //정답갯수
  const [wronganswer, setWronganswer] = useState(0); //오답갯수

  //랜덤숫자 생성함수
  const randomNum = () => {
    let n1 = Math.floor(Math.random() * 99);
    let n2 = Math.floor(Math.random() * 99);
    console.log(n1 + n2);

    setNum1(n1);
    setNum2(n2);
  };
  //앱이 처음시작될때 문제를 출력하기위하여
  useEffect(() => {
    randomNum();
  }, []);
  const passcheck = () => {
    //사용자 입력값과 더학 값이 일치하면 정답->정답 ++
    if (val == num1 + num2) {
    } else {
    }
  };
  return (
    <div className="App container text-center">
      <h1>더하기 게임</h1>
      <div className="numBox d-flex border p-3 bg-ligth justity-content-center fs-1">
        <div className="num border">{num1}</div>
        <span className="calcText">+</span>
        <div className="num border">{num2}</div>
        <span className="calcText">=</span>
        <input
          type="text"
          className="result"
          placeholder="입력"
          size="3"
          value={val}
          maxLength={3}
          onInput={(e) => {
            console.log("입력중", e.target.value);
            setVal(e.target.value);
          }}
        />
      </div>
      <p>
        정답수 : {answer} ,오답수 :{wronganswer}
      </p>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.target.innerText = "정답제출";
          passcheck(); //게임판정
          console.log("확인");
          randomNum();
        }}
      >
        시작
      </button>
    </div>
  );
}

export default App;

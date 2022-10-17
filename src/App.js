import React from "react";
//css 파일 임포트 하여 사용
// import "./App.css";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

/**
 * jsx로 컴포넌트를 만들어서 리턴하려면 반드시하나의 태그로 묶어야한다.
 *  사용하기 싫다면 fragment 를 활용가능
 * <> 빈태그로도 가능하다
 */

function App() {
  // let name = "JINIMI";

  //css 인라인 방법
  const style = {
    App: {
      backgroundColor: "pink",
    },
    h2: {
      color: "chartreuse",
    },
    bold_text: {
      color: "aqua",
    },
  };

  const number = 5;
  // const func = () => {
  //   return "안녕";
  // };
  // jsx {} 안에 숫자나문자열은 들어가지만 나머지 값은 들어가지 않는다.
  // 조건부 렌더링도 가능하다.
  return (
    <div style={style.App}>
      <MyHeader />
      <header className="App-header">
        <h2 style={style.h2}> Hi {["aaa", 2, 3]} 🤩 </h2>
        <b style={style.bold_text}> React Study </b>
        {number} 는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </header>
      <div></div>
      <MyFooter />
    </div>
  );
}

export default App;

import React from "react";
//css 파일 임포트 하여 사용
import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

/**
 * jsx로 컴포넌트를 만들어서 리턴하려면 반드시하나의 태그로 묶어야한다.
 *  사용하기 싫다면 fragment 를 활용가능
 * <> 빈태그로도 가능하다
 */

function App() {
  // let name = "JINIMI";

  //css 인라인 방법
  // const style = {
  //   App: {
  //     backgroundColor: "pink",
  //   },
  //   h2: {
  //     color: "chartreuse",
  //   },
  //   bold_text: {
  //     color: "aqua",
  //   },
  // };
  return (
    <div className="App">
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;

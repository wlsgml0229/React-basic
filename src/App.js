import React from "react";
//css 파일 임포트 하여 사용
import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";
import Container from "./Container";

/**
 * jsx로 컴포넌트를 만들어서 리턴하려면 반드시하나의 태그로 묶어야한다.
 *  사용하기 싫다면 fragment 를 활용가능
 * <> 빈태그로도 가능하다
 */

function App() {
  // props가 너무 길어질 수 있기 때문에 객체로 생성해서
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;

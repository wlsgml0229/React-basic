import { useState } from "react";

const Counter = () => {
  // 0에서 출발
  // 1씩 증가
  // 1씩 감소
  // count 상태
  console.log("counter 호출");
  const [count, setCount] = useState(0);
  // useState 는 배열을 반환하고 0인덱스 -> 상태의 값으로 사용  1번째 인덱스 -> count변수를 변환시키는 상태변화 함수로 사용된다.
  const onIncrease = () => {
    // 상태를 변화하는 함수에 count값을 변화시킬 내용을 추가
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  const [count2, setCount2] = useState(0);

  const onIncrease2 = () => {
    // 상태를 변화하는 함수에 count값을 변화시킬 내용을 추가
    setCount2(count2 + 1);
  };

  const onDecrease2 = () => {
    setCount2(count2 - 1);
  };

  /**
   *  결론적으로 화면에 표시되는 내용이 실시간으로 바뀐다 => count의 state 가 바뀔때마다 Counter라는 함수가 반환을 다시한다
   *  앱컴포넌트가 Counter 컴포넌트를 호출하고,  반환되는 html을 호출하기 떄문에 Counter 컴포넌트가 화면에 다시 그리게됨 (리렌더링)
   *  컴포넌트는 자신의 상태가 변화되면 다시 리렌더 된다
   *
   *  즉 갖고있는 state가변화되면 컴포넌트를 리렌더
   *
   *  리액트의 요소들을 동적 변화가능
   */

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
};

export default Counter;

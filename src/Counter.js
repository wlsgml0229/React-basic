import { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// 매개변수 props 추가
const Counter = ({ initalValue }) => {
  // 비구조화 할당을 통해서 받을 수도 있다.
  const [count, setCount] = useState(initalValue);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <br />
      <OddEvenResult count={count} />
    </div>
  );
};

/**
 * props의 default값 설정 -> 전달받지 못한 값의 에러발생을 막기위해
 */
Counter.defaultProps = {
  initalValue: 0,
};
export default Counter;

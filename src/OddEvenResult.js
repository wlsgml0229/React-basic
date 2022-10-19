// 부모가 내려주는 props가 변경되면 리렌더가 된다.
// 1. 본인이관리하는 state가 바뀔때리렌더
// 2. props로 받은 데이터가 변경될떄 리렌더
// 3. 부모컴포넌트의 state가 변경되면 자식컴포넌트도 리렌더
const OddEvenResult = ({ count }) => {
  //   console.log(count);
  console.log("Render");
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;

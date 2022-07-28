import React, { useEffect, useState, useCallback } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   // 브라우저에 나타나는 화면의 내용이 변경이 있지 않은 콘솔만 출력하는 함수다.
  //   // 따라서 버튼을 클릭해서 이 함수가 실행되어도 DOM트리가 다시 그려지거나(페이지 새로고침)
  //   // 재렌더링이 일어나지는 않는다.
  //   // 하지만 input은 state로 관리중이기 때문에 값이 변경될 때마다 재렌더링이 일어나고,
  //   // 그 때마다 App컴포넌트가 다시 호출되어 someFuncion 변수도 초기화되고,
  //   // 형태는 이전과 같지만 새로운 주소의 새 익명함수로 재할당받는다.

  //   return console.log(`someFunc: number: ${number}`);
  // };

  const someFunction = useCallback(() => {
    return console.log(`someFunc: number: ${number}`);
  }, [number]); // number state가 변경될 때만 초기화됨.

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>someFunction 함수 작동</button>
    </div>
  );
}

export default App;

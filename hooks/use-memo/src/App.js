import React, { useState, useMemo } from 'react';

const hardCalculate = number => {
  console.log('어려운 계산!');
  for (let i = 0; i < 999999999; i++) {} // 무거운 연산의 간단한 예시용. for문을 엄청나게 돌리고 나서 반환문 실행.
  return number + 10000; // 위의 연산 때문에 약 1초 후에 화면에 반영된다.
};

const easyCalculate = number => {
  console.log('쉬운 계산!');
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber); // hardNumber의 값이 변경이 있을 경우에만 hardSum 변수를 초기화.
  }, [hardNumber]); // useMemo의 의존성 배열의 값이 변경이 있어야만 리턴문의 내용이 초기화된다.
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={e => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={e => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum} </span>
    </div>
  );
}

export default App;

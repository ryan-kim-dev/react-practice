import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux'; // Store 생성 메서드 import

import { Provider, useSelector, useDispatch } from 'react-redux';
// 1. provider : 컴포넌트
// 2. useSelector : 어떤 state 값을 쓸 지 선택
// 3. useDispatch : state 값을 변경 시 사용

// * Reducer 함수 정의
function reducer(currentState, action) {
  // * 현재 상태가 값이 없는 경우 기본 상태값을 리턴.
  if (currentState === undefined) {
    return { number: 1 };
  }
  // 과거 state의 deepCopy한 복제본 newState로 값의 변경을 다루어 값의 불변성 유지.
  const newState = { ...currentState };
  // dispatch 함수가 reducer 함수를 호출하므로 아래 if문 정의.
  if (action.type === 'INCREASE') {
    newState.number++;
  }
  return newState; // 반환값이 새로운 State가 되어 Store에 반영됨.
}
const store = createStore(reducer);

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        {/* Provider에 store 속성 필수 */}
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}
function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  // 상태 사용한 컴포넌트만 렌더링되는지 확인용 코드
  console.log('Left2 component re-rendered');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  // 상태 사용한 컴포넌트만 렌더링되는지 확인용 코드
  console.log('Left3 component re-rendered');

  // * useSelector 사용해서 state 직통으로 받아오기
  // * useSelector의 인수로 콜백함수를 정의하거나 외부에서 정의한 함수명을 넣어주어야 한다.
  const number = useSelector(state => state.number);
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  // * Right3 컴포넌트의 버튼이 Left3의 number 상태를 변경할 수 있도록 dispatch 함수 사용
  const dispatch = useDispatch(); // dispatch 함수 사용방법
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          // dispatch 함수가 실행되며 reducer 함수를 호출.
          dispatch({ type: 'INCREASE' });
        }}
      ></input>
    </div>
  );
}

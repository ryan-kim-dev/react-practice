import { useDispatch, useSelector } from 'react-redux'; // 추가
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // When using useSelector,
  // React-Redux will automatically set up a subscription
  // useSelector 를 사용하여 redux store에서 상태가 바뀔 때마다,
  // 가장 최신의 state.counter 값을 받는다.
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: '증가' });
  };

  const increaseHandler = () => {
    // 실제 프로그램이라면 유저의 인풋값을 받아오겠지만,
    // 연습예제이므로 우선 amount: 5 로 payload 하드코딩.
    dispatch({ type: '가변적인증가', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: '감소' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className="counter">
        <button onClick={incrementHandler}>증가</button>
        <button onClick={increaseHandler}>5씩 증가</button>
        <button onClick={decrementHandler}>감소</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

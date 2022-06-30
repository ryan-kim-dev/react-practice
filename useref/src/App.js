import React from 'react';
import { useState, useRef } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [seconds, setSeconds] = useState(0);

  const renders = useRef(0);
  const timerId = useRef();

  const handleChange = e => {
    setUserInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);

    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <p>렌더링 횟수: {renders.current}</p>
      <br />
      <section>
        <button onClick={startTimer}>타이머 시작</button>
        <button onClick={stopTimer}>타이머 중지</button>
        <button onClick={resetTimer}>타이머 리셋</button>
      </section>
      <br />
      <p>초: {seconds}</p>
      <br />
      <p>{userInput}</p>
    </div>
  );
}

export default App;

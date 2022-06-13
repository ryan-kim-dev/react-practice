import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

function ParentComponent() {
  const [value, setValue] = useState('부모의 원래 제목');
  const handleChange = () => setValue('자식이 바꾼 부모의 제목');

  return (
    <div>
      <h1>{value}</h1>
      <ChildComponent handleButtonClick={handleChange} />
    </div>
  );
}

function ChildComponent({ handleButtonClick }) {
  return (
    <div>
      <button onClick={handleButtonClick}>자식이 부모 제목 바꾸기</button>
    </div>
  );
}

export default App;

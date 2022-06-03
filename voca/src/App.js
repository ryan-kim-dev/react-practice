import './App.css';
import Hello from './component/Hello';
import { useState } from 'react';
function App() {
  let [smileCount, smileClick] = useState(0);

  return (
    <div className="App">
      <Hello />
      <span onClick={() => smileClick(smileCount++)}>😀</span>
      <span>{smileCount}</span>
    </div>
  );
}

export default App;

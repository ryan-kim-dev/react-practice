import './App.css';
import styles from './App.module.css';
import Hello from './component/Hello';
import Welcome from './welcome';
import { useState } from 'react';
function App() {
  let [smileCount, smileClick] = useState(0);

  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>App</div>
      <span onClick={() => smileClick(smileCount++)}>😀</span>
      <span>{smileCount}</span>
      <Welcome></Welcome>
    </div>
  );
}

export default App;

import World from './world';
import styles from './Hello.module.css';
export default function Hello() {
  return (
    <div>
      <div>안녕!</div>
      <World></World>
      <div className={styles.box}>Hello</div>
    </div>
  );
}

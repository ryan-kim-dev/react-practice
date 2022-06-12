import { useState } from 'react';

export default function Word({ word }) {
  // 단어 뜻 보기 클릭시 보임/안보임 제어용 boolean 값 state
  const [isShow, setIsShow] = useState(false);
  // 암기여부 boolean값 state
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = e => setIsShow(!isShow);
  const toggleDone = e => setIsDone(!isDone);

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      {/* isShow가 true여야 단어 뜻이 보여진다. */}
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          뜻 {isShow === true ? '숨기기' : '보기'}
        </button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}

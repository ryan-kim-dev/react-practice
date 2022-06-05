import './App.css';
import { useState } from 'react';

function App() {
  let [articleTitle, changeTitle] = useState([
    '타코가 먹고싶다',
    '쓰리제이에스 하고싶다',
    '남자 코트 추천',
  ]);

  let [likeCount, changeCount] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <h1 className="header__title">Ryan's Blog</h1>
      </div>
      <div>
        <button
          onClick={() => {
            let copy = [...articleTitle];
            copy.sort();
            changeTitle(copy);
          }}
        >
          가나다순 정렬
        </button>

        <button
          onClick={() => {
            let copy = [...articleTitle];
            copy[0] = '바꿀 제목';
            changeTitle(copy);
          }}
        >
          제목 변경
        </button>
      </div>
      <ul className="article-area">
        {articleTitle.map((title, i) => {
          return (
            <li className="aricle-area__item" key={i}>
              <div>
                <h4
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  {title}
                </h4>
                <span
                  onClick={() => {
                    let copy = [...likeCount];
                    copy[i] += 1;
                    changeCount(copy);
                  }}
                >
                  👍 :
                </span>
                {likeCount[i]}
              </div>

              <p>6월 05일 발행</p>
            </li>
          );
        })}
      </ul>
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;

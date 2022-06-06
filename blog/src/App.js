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

  let [index, setIndex] = useState(0);

  let [newTitle, setTitle] = useState();

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
            copy[0] = '여자 코트 추천';
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
                    setIndex(i);
                  }}
                >
                  {title}
                  <span
                    onClick={e => {
                      e.stopPropagation();
                      let copy = [...likeCount];
                      copy[i] += 1;
                      changeCount(copy);
                    }}
                  >
                    👍 :
                  </span>
                  {likeCount[i]}
                </h4>
              </div>
              <p>6월 05일 발행</p>
              <button
                onClick={() => {
                  let copy = [...articleTitle];
                  copy.splice(i, 1);
                  changeTitle(copy);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            let copy = [...articleTitle];
            copy.unshift(newTitle);
            changeTitle(copy);
          }}
        >
          등록
        </button>
      </div>

      {modal ? (
        <Modal
          changeTitle={changeTitle}
          articleTitle={articleTitle}
          index={index}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.articleTitle[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() =>
          props.changeTitle([
            '여자 코트 추천',
            '쓰리제이에스 하고싶다',
            '남자 코트 추천',
          ])
        }
      >
        제목 변경
      </button>
    </div>
  );
}
export default App;

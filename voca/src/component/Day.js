import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';
export default function Day() {
  // dummy.words 의 .day, .eng, .kor, .isDone 받아와야 함.
  // filter 메서드로 각 day에 할당된 단어만 받아오기

  const { day } = useParams();
  // 위에 선언한 day 숫자랑 일치하는 값만 반환하게 filter.
  // const wordList = dummy.words.filter(word => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWords(data);
      });
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

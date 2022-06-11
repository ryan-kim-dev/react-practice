import dummy from '../database/data.json';

export default function Day() {
  // dummy.words 의 .day, .eng, .kor, .isDone 받아와야 함.
  return (
    <>
      <table>
        <tbody>
          {dummy.words.map(word => (
            <tr>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

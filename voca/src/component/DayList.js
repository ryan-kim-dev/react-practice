import dummy from '../database/data.json';

import { Link } from 'react-router-dom';

export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map(days => (
        // 값을 혼동할 수 있어 원래 프로퍼티 키 days와 동일하게 매개변수명을 days로 기입함.
        <li key={days.id}>
          <Link to={`/day/${days.day}`}>Day {days.day}</Link>
        </li>
      ))}
    </ul>
  );
}

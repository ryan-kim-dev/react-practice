import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function DayList() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setDays(data);
      });
  }, []);

  return (
    <ul className="list_day">
      {days.map(day => (
        // 값을 혼동할 수 있어 원래 프로퍼티 키 days와 동일하게 매개변수명을 days로 기입함.
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

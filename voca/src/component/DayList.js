import dummy from '../database/data.json';

export default function DayList() {
  console.log(dummy);
  return (
    <ul className="list_day">
      {dummy.days.map(day => (
        <li key={day.id}>Day {day.day}</li>
      ))}
    </ul>
  );
}

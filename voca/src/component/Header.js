import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">FE 개발자 필수 영단어</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          단어 추가
        </a>
        <a href="#x" className="link">
          Day 추가
        </a>
      </div>
    </div>
  );
}

export default function Tweet({ tweet }) {
  return (
    <li>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
    </li>
  );
}

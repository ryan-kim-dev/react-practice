import { useState } from 'react';

import Tweet from '../component/Tweet';

const dummyTweets = [
  {
    id: 1,
    username: 'Ryan1',
    content: '더미트윗 1번째 데이터',
  },
  {
    id: 2,
    username: 'Ryan2',
    content: '더미트윗 2번째 데이터',
  },
  {
    id: 3,
    username: 'Ryan3',
    content: '더미트윗 3번째 데이터',
  },
  {
    id: 4,
    username: 'Ryan4',
    content: '더미트윗 4번째 데이터',
  },
];

export default function Hello() {
  let [newUser, setNewUser] = useState('');
  let [newContent, setNewContent] = useState('');
  let [copiedData, setCopiedData] = useState(dummyTweets);
  const handleInputUser = e => {
    setNewUser(e.target.value);
  };
  const handleContent = e => {
    setNewContent(e.target.value);
  };

  const handleButtonClick = () => {
    const newTweet = {
      id: copiedData.length - 5,
      username: newUser,
      content: newContent,
    };

    let copy = [newTweet, ...copiedData];

    setCopiedData(copy);
    console.log(copiedData);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleInputUser} />
      </div>
      <div>
        <textarea onChange={handleContent}></textarea>
      </div>
      <button onClick={handleButtonClick}>트윗하기</button>
      <ul>
        {copiedData.map(tweet => {
          return (
            <Tweet
              tweet={tweet}
              key={Math.random(1, Number.MAX_SAFE_INTEGER)}
            />
          );
        })}
      </ul>
    </div>
  );
}

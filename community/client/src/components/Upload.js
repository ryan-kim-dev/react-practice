import React, { useState } from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  display: block;
`;

const Upload = () => {
  const [contentList, setContentList] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');

  const [isPosted, setIsPosted] = useState(false);

  const handleInput = e => {
    if (e.target.value.length !== 0) {
      setCurrentTitle(e.target.value);
    }
  };

  const handleSubmitBtn = e => {
    if (currentTitle.length !== 0) {
      e.preventDefault();
      const newContent = [...contentList, currentTitle];
      setContentList(newContent);
      setIsPosted(!isPosted);
      setCurrentTitle('');
    }
  };

  return (
    <>
      <form className="container">
        <label for="article-title">글제목</label>
        <TitleInput
          id="article-title"
          onChange={e => handleInput(e)}
          value={currentTitle}
        />

        <button onClick={handleSubmitBtn}>제출</button>
      </form>
    </>
  );
};

export default Upload;

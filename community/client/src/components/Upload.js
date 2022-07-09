import React, { useState } from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  display: block;
`;

const Upload = ({
  handleInput,
  currentTitle,
  setCurrentTitle,
  handleSubmitBtn,
}) => {
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

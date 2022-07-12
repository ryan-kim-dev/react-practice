import React, { useState } from 'react';
import styled from 'styled-components';

const TitleArea = styled.div`
  label {
    font-size: 14px;
  }
`;
const TextArea = styled.div`
  label {
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  display: block;
  background-color: skyblue;
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
        <TitleArea>
          <label htmlFor="article-title">글제목</label>
        </TitleArea>
        <input
          id="article-title"
          onChange={e => handleInput(e)}
          value={currentTitle}
        />
        <TextArea>
          <label htmlFor="">글내용</label>
        </TextArea>
        <input type="textarea" className="article-body" />

        <SubmitButton onClick={handleSubmitBtn}>제출</SubmitButton>
      </form>
    </>
  );
};

export default Upload;

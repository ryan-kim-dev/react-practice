import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleArea = styled.div`
  label {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  + input {
    width: 50%;
  }
`;
const TextArea = styled.div`
  label {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  /* 인접 형제 선택자로 textarea 태그 스타일링 */
  + textarea {
    min-height: 500px;
    width: 50%;
  }
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 25px;
  border: none;
  border-radius: 7px;
  margin-top: 10px;
  display: block;
  background-color: #7d9d9c;
  color: #fff;
  &:hover {
    background-color: #576f72;
  }
`;

const Upload = ({
  handleInput,
  currentTitle,
  setCurrentTitle,
  handleSubmitBtn,
}) => {
  return (
    <ContainerForm className="container">
      <TitleArea>
        <label htmlFor="article-title">글제목</label>
      </TitleArea>
      <input
        id="article-title"
        onChange={e => handleInput(e)}
        value={currentTitle}
      />
      <TextArea>
        <label htmlFor="article-body">글내용</label>
      </TextArea>
      <textarea id="article-body" />
      <SubmitButton onClick={handleSubmitBtn}>제출</SubmitButton>
    </ContainerForm>
  );
};

export default Upload;

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const Upload = props => {
  // useNavigate 사용
  let navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || content === '') return alert('모든 항목을 채워주세요');

    let body = {
      title,
      content,
    };
    axios
      .post('/api/post/submit', body)
      .then(response => {
        if (response.data.success) {
          alert('포스팅 성공! 홈으로 돌아갑니다.(useNavigate)');
          navigate('/');
        } else {
          return alert('포스팅 실패');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <ContainerForm className="container">
      <TitleArea>
        <label htmlFor="title">글제목</label>
      </TitleArea>
      <input
        id="title"
        onChange={e => setTitle(e.currentTarget.value)}
        value={title}
      />
      <TextArea>
        <label htmlFor="content">글내용</label>
      </TextArea>
      <textarea
        id="content"
        value={content}
        onChange={e => setContent(e.currentTarget.value)}
      />
      <SubmitButton onClick={e => onSubmit(e)}>제출</SubmitButton>
    </ContainerForm>
  );
};

export default Upload;

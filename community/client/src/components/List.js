import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledList = styled.ul`
  > li {
    list-style: none;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #6f6f6f;
  }
`;

const List = ({ contentList }) => {
  const [text, setText] = useState('');
  const body = {
    author: 'Ryan',
  }; // 서버로 보낼 데이터인 body 객체 생성

  useEffect(() => {
    axios
      .post('/api/test', body) // post의 2번째 인수로 서버에 데이터를 보냄.
      .then(response => {
        // 성공 핸들링
        alert('요청 성공');
        setText(response.data.text);
      })
      .catch(error => {
        // 에러 핸들링
        alert('요청 실패');
        console.log(error);
      });
  }, []);
  return (
    <>
      <h3>{text}</h3>
      {contentList.length !== 0 ? (
        <StyledList>
          {contentList.map((el, idx) => (
            <li key={idx}>제목:{el}</li>
          ))}
        </StyledList>
      ) : null}
    </>
  );
};

export default List;

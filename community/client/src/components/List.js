import React, { useState } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  > li {
    list-style: none;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #6f6f6f;
  }
`;

const List = () => {
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

import React, { useState } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  > li {
    list-style: none;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #6f6f6f;
  }
`;

const List = ({ contentList }) => {
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

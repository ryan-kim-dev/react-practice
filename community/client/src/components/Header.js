import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  > div {
    background-color: lightgray;
    flex-grow: 1;
    text-align: center;
  }

  .selected {
    background-color: skyblue;
  }
`;

const Header = () => {
  const [isSelected, setIsSelected] = useState(0);

  const handleSelected = idx => {
    setIsSelected(idx);
    console.log(idx);
  };
  return (
    <>
      <StyledHeader>
        <h1>헤더 컴포넌트</h1>
      </StyledHeader>
      <StyledNav>
        <div
          onClick={() => handleSelected(1)}
          className={isSelected === 1 ? 'home selected' : 'home'}
        >
          <Link to="/">홈</Link>
        </div>
        <div
          onClick={() => handleSelected(2)}
          className={isSelected === 2 ? 'list selected' : 'list'}
        >
          <Link to="/list">게시판</Link>
        </div>
        <div
          onClick={() => handleSelected(3)}
          className={isSelected === 3 ? 'upload selected' : 'upload'}
        >
          <Link to="/upload">글 작성</Link>
        </div>
      </StyledNav>
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #576f72;
  color: #f0ebe3;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > div {
    background-color: #e4dccf;
    flex-grow: 1;
    text-align: center;
    padding: 5px 0px;
  }

  & .link-text {
    color: #fff;
    text-decoration: none;
  }

  .selected {
    background-color: #7d9d9c;
  }
`;

const Header = () => {
  const [isSelected, setIsSelected] = useState(0);

  const handleSelected = idx => {
    setIsSelected(idx);
    console.log(idx);
  };
  return (
    <HeaderContainer>
      <StyledHeader>
        <h1>CRUD, 로그인 연습용 앱</h1>
      </StyledHeader>
      <StyledNav>
        <div
          onClick={() => handleSelected(1)}
          className={isSelected === 1 ? 'home selected' : 'home'}
        >
          <Link to="/" className="link-text">
            홈
          </Link>
        </div>
        <div
          onClick={() => handleSelected(2)}
          className={isSelected === 2 ? 'list selected' : 'list'}
        >
          <Link to="/list" className="link-text">
            게시판
          </Link>
        </div>
        <div
          onClick={() => handleSelected(3)}
          className={isSelected === 3 ? 'upload selected' : 'upload'}
        >
          <Link to="/upload" className="link-text">
            글 작성
          </Link>
        </div>
      </StyledNav>
    </HeaderContainer>
  );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
const LoginContainer = styled.div``;
const TitleArea = styled.div``;
const FormArea = styled.div``;
const Socials = styled.div``;
const Links = styled.div``;
const SubmitBtn = styled.button``;

const Login = () => {
  return (
    <LoginContainer>
      <TitleArea>
        <h2>LOGIN</h2>
      </TitleArea>
      <FormArea>
        <form action="POST">
          <div className="widget">
            <label htmlFor="user-id">아이디</label>
            <input type="text" id="user-id" placeholder="아이디를 입력하세요" />
          </div>
          <div className="widget">
            <label htmlFor="user-pw">비밀번호</label>
            <input
              type="password"
              id="user-pw"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <SubmitBtn>로그인</SubmitBtn>
        </form>
      </FormArea>
      <Socials>
        <BsGithub />
      </Socials>
      <Links></Links>
    </LoginContainer>
  );
};

export default Login;

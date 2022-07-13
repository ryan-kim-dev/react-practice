import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  // 유저 인풋 2가지를 받기 위해 Ref 사용.
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  // * 유저의 인풋값을 받는 핸들러함수 정의
  // 1. 브라우저에서 자동으로 요청을 보내는 것을 막는다.
  // 2. 유저의 인풋값을 받는 2가지 방법(state, Ref) 중 Ref 사용 예시.
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

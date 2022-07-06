import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 추가
import store from './store/index'; // 추가

import './index.css';
import App from './App';

// * Provider 컴포넌트를 store 속성과 함께 사용
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

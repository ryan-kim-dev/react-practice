import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './components/GlobalStyle';
import Upload from './components/Upload';
import Header from './components/Header';
import List from './components/List';

function App() {
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
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route
          path="/upload"
          element={
            <Upload
              handleInput={handleInput}
              currentTitle={currentTitle}
              setCurrentTitle={setCurrentTitle}
              handleSubmitBtn={handleSubmitBtn}
            />
          }
        />
        <Route
          path="/list"
          element={
            <List contentList={contentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

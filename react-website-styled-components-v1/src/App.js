import React from 'react';
import GlobalStyle from './GlobalStyles';
import { Navbar } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" elements={<Navbar />} />
        <Route path="/globalstyle" elements={<GlobalStyle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

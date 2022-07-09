import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Upload from './components/Upload';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;

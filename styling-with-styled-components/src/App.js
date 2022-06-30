import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <div>
      <AppBlock>
        <Button>버튼이다</Button>
      </AppBlock>
    </div>
  );
}

export default App;

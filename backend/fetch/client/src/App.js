import React, { useState, useEffect } from 'react';

function App() {
  // * 데이터의 state
  const [todoList, setTodoList] = useState(null);
  // * 새로 들어갈 데이터 중 text 항목의 state
  const [text, setText] = useState('');
  // * 새로 들어갈 데이터 중 done 항목의 state
  const [done, setDone] = useState(false);
  // * 제출 state
  const [toggleSubmit, setToggleSubmit] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/todo')
      .then(res => res.json())
      .then(data => setTodoList(data))
      .then(() => console.log(todoList))
      .catch(err => {
        console.log(err);
      });
  }, [toggleSubmit]);

  const handleInputText = e => {
    setText(e.target.value);
  };

  const handleInputCheckbox = e => {
    setDone(!done);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    // setToggleSubmit(!toggleSubmit);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      id: Math.random(),
      text,
      done,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:3001/api/todo', requestOptions)
      .then(response => response.json())
      .then(result => setToggleSubmit(!toggleSubmit))
      .catch(error => console.log('error', error));
  };

  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <form onSubmit={handleSubmitForm}>
        <input name="text" type="text" onChange={handleInputText} />
        <input name="done" type="checkbox" onChange={handleInputCheckbox} />
        <input value="추가" type="submit" />
      </form>
      {todoList?.map(todo => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

const express = require('express');
const app = express();
const cors = require('cors'); // cors 라이브러리 import

// * cors 라이브러리 사용
app.use(cors());
// * 바디파서 사용
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 더미데이터
let id = 2;
const todoList = [
  {
    id: 1,
    text: '할일 1',
    done: false,
  },
];

// GET 요청 처리
app.get('/api/todo', function (req, res) {
  res.json(todoList);
});

// POST 요청 처리
app.post('/api/todo', function (req, res) {
  console.log(req.body);
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.status(200).json(todoList);
});

app.listen(3001, () => {
  console.log('3001번 포트로 express서버 실행');
});

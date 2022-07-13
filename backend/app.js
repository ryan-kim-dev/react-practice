const express = require('express');
const app = express();

// 더미 db
const database = [
  { id: 1, title: '글1' },
  { id: 2, title: '글2' },
  { id: 3, title: '글3' },
];

// bodyParser 사용하기
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  // sendFile 말고 render 메서드로도 페이지를 보낼 수 있다. (ejs, pug 검색)
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/database', (req, res) => {
  res.send(database);
});

// req.params로 값 추가하는 방법은 거의 안씀.
// app.get('/database/:title', (req, res) => {
//   const title = req.params.title;
//   database.push({
//     id: database.length + 1,
//     title, // title: req.params.title
//   });
//   res.send('값 추가 성공');
// });

// * GET: 요청한 특정 값만 보내기
app.get('/database/:id', (req, res) => {
  const id = req.params.id; // req.params는 문자열이다.
  const data = database.filter(el => el.id === Number(id));
  // filter 메서드 대신 find 메서드를 써도 됨.
  res.send(data);
});

// * POST: 값 추가하기
app.post('/database', (req, res) => {
  const title = req.body.title;
  database.push({
    id: database.length + 1,
    title, // title: req.body.title
  });
  res.send('값 추가 성공. 바디파서 사용해서 req.body 받기.');
});

// * PUT: 값 수정하기
app.put('/database', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  database[id - 1].title = title;

  res.send('값 수정 완료.');
});

// * DELETE: 값 삭제하기
app.delete('/database', (req, res) => {
  const id = req.body.id;

  database.splice(id - 1, 1);

  res.send('값 삭제 완료.');
});

app.listen(3000, () => console.log('server on'));

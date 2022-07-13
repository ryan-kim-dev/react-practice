const express = require('express');
const argon2 = require('argon2');
const app = express();

// 더미 db
// const database = [
//   { id: 1, title: '글1' },
//   { id: 2, title: '글2' },
//   { id: 3, title: '글3' },
// ];
const database = [{ id: 1, username: 'abc', password: 'abc' }];

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

// // * GET: 요청한 특정 값만 보내기
// app.get('/database/:id', (req, res) => {
//   const id = req.params.id; // req.params는 문자열이다.
//   const data = database.filter(el => el.id === Number(id));
//   // filter 메서드 대신 find 메서드를 써도 됨.
//   res.send(data);
// });

// // * POST: 값 추가하기
// app.post('/database', (req, res) => {
//   const title = req.body.title;
//   database.push({
//     id: database.length + 1,
//     title, // title: req.body.title
//   });
//   res.send('값 추가 성공. 바디파서 사용해서 req.body 받기.');
// });

// // * PUT: 값 수정하기
// app.put('/database', (req, res) => {
//   const id = req.body.id;
//   const title = req.body.title;

//   database[id - 1].title = title;

//   res.send('값 수정 완료.');
// });

// // * DELETE: 값 삭제하기
// app.delete('/database', (req, res) => {
//   const id = req.body.id;

//   database.splice(id - 1, 1);

//   res.send('값 삭제 완료.');
// });

// * 회원가입 api 만들기 + 비밀번호 암호화 적용하기
app.post('/signup', async (req, res) => {
  const { username, password, age, birthday } = req.body;
  const hash = await argon2.hash(password);
  database.push({
    username,
    password: hash,
    age,
    birthday,
  });
  res.send('회원가입 성공');
});

// * 로그인 api 만들기 + 비밀번호 검증
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = database.filter(user => user.username === username);
  if (user.length === 0) {
    return res.status(403).send('등록되지 않은 사용자입니다.');
  }
  if (!(await argon2.verify(user[0].password, password))) {
    return res.status(403).send('비밀번호가 틀립니다.');
  }
  res.send('로그인 성공.');
});

app.listen(3000, () => console.log('server on'));

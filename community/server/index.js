const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const db = require('./config/keys');
app.use(express.static(path.join(__dirname, '../client/build')));

// 클라이언트에서 보낸 데이터를 파싱하기 위해 사용하는 2가지 코드
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정의한 모델을 import 해오기
const { Post } = require('./Model/Post');

app.listen(port, () => {
  mongoose
    .connect(db.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(`${err}`));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/test', (req, res) => {
  const communityPost = new Post({
    title: '글제목이다',
    content: '글내용이다',
  });
  // .save() 없으면 db로 데이터 안넘어옴!!
  communityPost.save().then(() => {
    res.status(200).json({ success: true, text: 'hi' });
  });
});

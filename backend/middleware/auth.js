const jwt = require('jsonwebtoken');
const { database } = require('../database');

const validUser = (req, res, next) => {
  const { access_token } = req.cookies; // 요청 쿠키에서 토큰만 뽑아오기
  if (!access_token) {
    return res.status(401).send('토큰이 없습니다.');
  }
  try {
    // db에 있는 유저인지 확인하기 위해 복호화 - verify 메서드 사용
    // const decoded = jwt.verify(access_token, 'secure');
    // console.log(decoded); // { username: 'kkk', iat: 1657855470 }
    const { username } = jwt.verify(access_token, 'secure');
    const userInfo = database.find(data => data.username === username);
    if (!userInfo) {
      throw '유저 정보가 없습니다';
    }
    next(); // app.js로 다음 코드 실행순서를 넘김
  } catch (err) {
    res.status(401).send('유효한 엑세스 토큰이 아닙니다');
  }
};

module.exports = { validUser };

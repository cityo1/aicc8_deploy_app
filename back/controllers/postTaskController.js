const database = require('../database/database');
const { v4: uuidv4 } = require('uuid');

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
exports.postTask = async (request, response) => {
  const _Id = uuidv4(); // 보통 고유값에 언더바 씀
  const { title, description, date, isCompleted, isImportant, userId } =
    request.body;
  console.log(title, description, date, isCompleted, isImportant, userId);
  try {
    await database.pool.query(
      'INSERT INTO tasks (_id, title, description, date, isCompleted, isImportant, userId) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [_Id, title, description, date, isCompleted, isImportant, userId],
    );
    return response.status(200).json({ msg: 'Task Create successfully' });
  } catch (error) {
    return response.status(500).json({ msg: `Post Task Fail: ${error}` });
  }
};

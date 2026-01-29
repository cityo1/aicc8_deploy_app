const database = require('../database/database');

// users path를 엔드포인트로 설정했을 때 get 요청(비동기)
exports.getTasks = async (request, response) => {
  const userId = request.params.userId;
  console.log(userId);
  try {
    const result = await database.pool.query(
      'SELECT * FROM tasks WHERE userId = $1 ORDER BY created_at DESC',
      [userId],
    );
    return response.status(200).json(result.rows);
  } catch (error) {
    return response.status(500).json({ message: `Get Tasks Error: ${error}` }); // 데이터를 json 형식으로 변환
  }
};

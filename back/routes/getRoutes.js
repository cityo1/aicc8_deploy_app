const router = require('express').Router(); // express에서 제공하는 라우트 메서드 저장
const { getTasks } = require('../controllers/getControllers');

// :userId -> 정해지지 않은 문자열을 params에 전달한다.
router.get('/get_tasks/:userId', getTasks);

module.exports = router;

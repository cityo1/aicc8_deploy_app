const router = require('express').Router(); // express에서 제공하는 라우트 메서드 저장
const { deleteTask } = require('../controllers/deleteTaskController');

// :itemId -> 정해지지 않은 문자열을 params에 전달한다.
router.delete('/delete_task/:itemId', deleteTask);

module.exports = router;

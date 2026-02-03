const database = require('../database/database');

exports.deleteTask = async (request, response) => {
  const itemId = request.params.itemId;

  try {
    const result = await database.pool.query(
      'DELETE FROM tasks WHERE _id = $1',
      [itemId]
    );
    return response.status(200).json({ msg: 'Task Deleted Successfully' });
  } catch (error) {
    return response.status(500).json({ msg: `Delete Task Error: ${error}` });
  }
};

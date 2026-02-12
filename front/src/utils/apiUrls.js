const DOMAIN = 'http://3.95.226.145';
// 인스턴스 주소(aws ec2)

const GET_TASKS_API_URL = `${DOMAIN}/get_tasks`;
const POST_TASK_API_URL = `${DOMAIN}/post_task`;
const UPDATE_COMPLETED_TASK_API_URL = `${DOMAIN}/update_completed_task`;
const DELETE_TASK_API_URL = `${DOMAIN}/delete_task`;
const PUT_TASK_API_URL = `${DOMAIN}/update_task`;

export {
  GET_TASKS_API_URL,
  POST_TASK_API_URL,
  UPDATE_COMPLETED_TASK_API_URL,
  DELETE_TASK_API_URL,
  PUT_TASK_API_URL,
};

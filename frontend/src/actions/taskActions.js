import axios from 'axios';
import { GET_TASKS } from './types';

export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/tasks');
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

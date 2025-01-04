import { GET_TASKS, GET_TASKS_LOADING, GET_TASKS_ERROR } from '../actions/types';

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};


export default function taskReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS_LOADING:
      return { ...state, loading: true, error: null };
    case GET_TASKS:
      return { ...state, loading: false, tasks: payload };
    case GET_TASKS_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}


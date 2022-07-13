import { FETCH, CREATE } from '../constants/actionTypes';
import * as api from '../api/api';



export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    console.log(data)
    dispatch({ type: FETCH, payload: data})
  }
  catch (err) {
    console.log(error.message);
  }
}
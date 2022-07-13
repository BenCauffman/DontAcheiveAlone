import { FETCH, CREATE } from '../constants/actionTypes';

const initialState = {
  test: true,
  posts: [],
};

const postReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FETCH: 
    console.log("hi")
      return {
        ...state,
        posts: action.payload,
      }
    default: 
      return {
        state
        }
  }
};

export default postReducer;
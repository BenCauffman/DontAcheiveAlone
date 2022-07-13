import { FETCH, CREATE } from '../constants/actionTypes';

const initialState = {
  test: true,
  posts: [],
};

const postReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FETCH: 
    const newPosts = action.payload;
    console.log(newPosts)
    Object.assign(state.posts, newPosts)
      return {
        ...state
      }
    default: 
      return {
        ...state
        }
  }
};

export default postReducer;
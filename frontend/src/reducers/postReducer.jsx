import {
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  FIND_POST,
} from "../contexts/constants";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case POSTS_LOADED_SUCCESS:
      return {
        ...state,
        posts: payload,
        postLoading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        postLoading: false,
      };
    case FIND_POST:
      return {
        ...state,
        post: payload,
      };
    case UPDATE_POST:
      const newPost = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
      return {
        ...state,
        post: newPost,
        postLoading: false,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        postLoading: false,
      };
    case POSTS_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postLoading: false,
      };
    default:
      return state;
  }
};

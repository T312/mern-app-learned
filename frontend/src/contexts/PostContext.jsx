import { createContext, useReducer, useState } from "react";
import { postReducer } from "../reducers/postReducer";
import { apiUrl } from "./constants";
import axios from "axios";
import { POSTS_LOADED_FAIL, POSTS_LOADED_SUCCESS } from "../contexts/constants";
export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postLoading: true,
  });
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  // get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      if (response.data.success) {
        dispatch({
          type: POSTS_LOADED_SUCCESS,
          payload: response.data.posts,
        });
      }
    } catch (error) {
      dispatch({
        type: POSTS_LOADED_FAIL,
      });
    }
  };

  //Post context data
  const postContextData = {
    postState,
    getPosts,
    showAddPostModal,
    setShowAddPostModal,
  };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;

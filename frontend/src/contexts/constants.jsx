export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "someDeployURL";
export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";

export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";

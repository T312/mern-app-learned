import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

const ActionButton = ({ url, _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal } =
    useContext(PostContext);
  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };

  return (
    <div className="btn-load">
      <a className="post-btn btn-link" href={url} target="_blank">
        Link
      </a>
      <a className="post-btn btn-edit" onClick={choosePost.bind(this, _id)}>
        Edit
      </a>
      <a className="post-btn btn-delete" onClick={deletePost.bind(this, _id)}>
        Delete
      </a>
    </div>
  );
};

export default ActionButton;

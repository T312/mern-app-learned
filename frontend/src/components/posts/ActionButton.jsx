import React from "react";

const ActionButton = ({ url, _id }) => {
  return (
    <div className="btn-load">
      <a className="post-btn btn-link" href={url} target="_blank">
        Link
      </a>
      <a className="post-btn btn-edit">Edit</a>
      <a className="post-btn btn-delete">Delete</a>
    </div>
  );
};

export default ActionButton;

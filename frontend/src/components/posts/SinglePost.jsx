import React from "react";
import ActionButton from "./ActionButton";

const SinglePost = ({ post: { _id, status, title, description, url } }) => {
  return (
    <>
      <div
        className={
          status === "Completed"
            ? "cards-inner success"
            : status === "Learning"
            ? "cards-inner warning"
            : "cards-inner danger"
        }
      >
        <div>
          <i className="fab fa-twitter"></i>
        </div>
        <div>
          <h4 className="title-learn">{title}</h4>
          <small
            className={
              status === "Completed"
                ? "status status-success"
                : status === "Learning"
                ? "status status-warning"
                : "status status-danger"
            }
          >
            {status}
          </small>
          <p>{description}</p>
          <ActionButton url={url} _id={_id} />
        </div>
      </div>
    </>
  );
};

export default SinglePost;

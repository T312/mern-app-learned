import React from "react";
import { PostContext } from "../contexts/PostContext";
import { useState, useContext, useEffect } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { AuthContext } from "../contexts/AuthContext";
import "./Dashboard/dashboard.css";
import SinglePost from "../components/posts/SinglePost";
import AddPostModal from "../components/posts/AddPostModal";
import PlusButton from "../assets/plus.png";
import UpdatePostModal from "../components/posts/UpdatePostModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const [hide, setHide] = useState(false);

  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);

  //contexts
  const {
    postState: { post, posts, postLoading },
    getPosts,
    setShowAddPostModal,
  } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getPosts();
  }, [post]);
  useEffect(() => {
    let hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      hide ? setHide(false) : setHide(true);
    });
  }, [hide]);

  let body = null;
  if (postLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info"></Spinner>
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <div className="main-container">
          <section className="header-post container-post">
            <div>
              <h1>🤘🤘 Hiii {username} 🤘🤘</h1>
              <h4 className="title-content">Welcome to mern learning</h4>
              <h3>
                Click your button below to track your first skill to learn
              </h3>
              <div>
                <button
                  className=" btn-create"
                  onClick={setShowAddPostModal.bind(this, true)}
                >
                  Create new now!
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  } else
    body = (
      <>
        <div className={hide ? "container-card hide" : "container-card"}>
          <div className="cards">
            {posts.map((post) => (
              <SinglePost key={post._id} post={post} />
            ))}
          </div>
        </div>
        {/* open add post modal */}
        <div
          className="btn-floating"
          onClick={setShowAddPostModal.bind(this, true)}
        >
          <img src={PlusButton} alt="Post Button" />
          <div className="tooltips"> Add new post here!</div>
        </div>
      </>
    );

  return (
    <div>
      {body}
      <AddPostModal />
      {post !== null && <UpdatePostModal />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Dashboard;

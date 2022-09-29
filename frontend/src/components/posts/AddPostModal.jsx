import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Cancel from "../../assets/close.png";
import { PostContext } from "../../contexts/PostContext";
const AddPostModal = () => {
  const { showAddPostModal, setShowAddPostModal } = useContext(PostContext);
  const closeModal = () => {
    setShowAddPostModal(false);
  };
  return (
    <div
      className={showAddPostModal ? "wrapper__modal active " : "wrapper__modal"}
      onPageHide={closeModal}
    >
      <div className="project_wrap">
        <div className="shadow close_btn"></div>
        <div className="project">
          <div className="header__modal">
            <div className="title__modal">What do you want to learn?</div>
            <span className="icon close_btn">
              <img src={Cancel} onClick={closeModal} className="i" />
            </span>
          </div>
          <div className="container__post__modal">
            <div className="body">
              <div className="project_name_wrap">
                <p className="label_title">Title</p>
                <input type="text" className="input_text" placeholder="Title" />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Description</p>
                <textarea
                  type="text"
                  className="input_text"
                  placeholder="Description"
                />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Link to learn</p>
                <input
                  type="text"
                  className="input_text"
                  placeholder="Link here"
                />
              </div>
              <div className="project_type_wrap">
                <p className="label_title">Choose Project Type</p>
                <div className="project_type">
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="project_type"
                      className="input_checkbox"
                      id="pt1"
                    />
                    <div className="checkmark"></div>
                    <div className="icon">
                      <ion-icon name="desktop-outline" className="i"></ion-icon>
                    </div>
                    <div className="text">To Learn</div>
                  </label>
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="project_type"
                      className="input_checkbox"
                      id="pt2"
                    />
                    <div className="checkmark"></div>
                    <div className="icon">
                      <ion-icon
                        name="phone-portrait-outline"
                        className="i"
                      ></ion-icon>
                    </div>
                    <div className="text">Learning</div>
                  </label>
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="project_type"
                      className="input_checkbox"
                      id="pt3"
                    />
                    <div className="checkmark"></div>
                    <div className="icon">
                      <ion-icon
                        name="tablet-landscape-outline"
                        className="i"
                      ></ion-icon>
                    </div>
                    <div className="text">Completed</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="footer__modal">
              <div className="btn_wrap">
                <button className="cancel_btn close_btn" onClick={closeModal}>
                  Cancel
                </button>
                <button className="create_btn">Start now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;

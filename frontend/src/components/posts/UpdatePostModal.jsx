import React from "react";
import { useContext, useEffect } from "react";
import Cancel from "../../assets/close.png";
import { PostContext } from "../../contexts/PostContext";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdatePostModal = () => {
  const {
    postState: { post },
    showUpdatePostModal,
    setShowUpdatePostModal,
    updatePost,
  } = useContext(PostContext);
  const {
    register,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: post,
  });
  const onSubmit = async (data) => {
    try {
      const { success, message } = await updatePost(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    reset(post);
  }, [post]);
  const notify = () => {
    toast.success("🦄 Wonderful! No time to stop!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      closeModal();
      notify();
      // reset({ title: "", description: "", url: "", status: "To Learn" });
      reset(post);
    }
  }, [formState, reset]);

  const closeModal = () => {
    reset(post);
    setShowUpdatePostModal(false);
  };
  return (
    <form
      className={
        showUpdatePostModal ? "wrapper__modal active " : "wrapper__modal"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="project_wrap">
        <div className="shadow close_btn"></div>
        <div className="project">
          <div className="header__modal">
            <div className="title__modal">Making Progress?</div>
            <span className="icon close_btn">
              <img src={Cancel} onClick={closeModal} className="i" />
            </span>
          </div>
          <div className="container__post__modal">
            <div className="body">
              <div className="project_name_wrap">
                <p className="label_title">Title</p>
                <input
                  type="text"
                  className="input_text"
                  placeholder="Title"
                  required
                  {...register("title", { required: true })}
                />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Description</p>
                <textarea
                  type="text"
                  className="input_text"
                  placeholder="Description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="project_name_wrap">
                <p className="label_title">Link to learn</p>
                <input
                  type="text"
                  className="input_text"
                  placeholder="Link here"
                  {...register("url", { required: true })}
                />
              </div>
              <div className="project_type_wrap">
                <p className="label_title">Choose Project Type</p>
                <div className="project_type">
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="status"
                      className="input_checkbox"
                      id="pt1"
                      value="To Learn"
                      {...register("status", { required: true })}
                    />
                    <div className="checkmark"></div>
                    <div className="icon"></div>
                    <div className="text">To Learn</div>
                  </label>
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="status"
                      className="input_checkbox"
                      id="pt2"
                      value="Learning"
                      {...register("status", { required: true })}
                    />
                    <div className="checkmark"></div>
                    <div className="icon"></div>
                    <div className="text">Learning</div>
                  </label>
                  <label className="pt_item">
                    <input
                      type="radio"
                      name="status"
                      className="input_checkbox"
                      id="pt3"
                      value="Completed"
                      {...register("status", { required: true })}
                    />
                    <div className="checkmark"></div>
                    <div className="icon"></div>
                    <div className="text">Completed</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="footer__modal">
              <div className="btn_wrap">
                <button
                  className="cancel_btn close_btn"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button className="create_btn" type="submit">
                  Update now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdatePostModal;

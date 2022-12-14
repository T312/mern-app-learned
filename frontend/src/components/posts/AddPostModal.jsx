import React from "react";
import { useContext, useEffect } from "react";
import Cancel from "../../assets/close.png";
import { PostContext } from "../../contexts/PostContext";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddPostModal = () => {
  const { showAddPostModal, setShowAddPostModal, addPost } =
    useContext(PostContext);
  const {
    register,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      url: "",
      status: "To Learn",
    },
  });

  const onSubmit = async (data) => {
    try {
      const { success, message } = addPost(data);
    } catch (error) {
      console.log(error);
    }
  };
  const notify = () => {
    toast.success("🦄 Learn now!", {
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
      reset({ title: "", description: "", url: "", status: "To Learn" });
      closeModal();
      notify();
    }
  }, [formState, reset]);

  const closeModal = () => {
    setShowAddPostModal(false);
  };
  return (
    <form
      className={showAddPostModal ? "wrapper__modal active " : "wrapper__modal"}
      onSubmit={handleSubmit(onSubmit)}
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
                  Start now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPostModal;

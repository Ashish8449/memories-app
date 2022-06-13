import * as api from "../api";

// action creators
export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.fetchPosts();
    console.log(res);

    const action = {
      type: "FETCH_ALL",
      payload: res.data,
    };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.creatPost(post);
    dispatch({
      type: "CREATE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log("run update post");
  const { data } = await api.updatePost(id, post);
  try {
    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log("error on update post");
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({
      type: "DELETE",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: "LIKE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

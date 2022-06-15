export const signIn = (fromData, history) => {
  return async (dispatch) => {
    try {
      // log in the user here
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
export const signUp = (fromData, history) => {
  return async (dispatch) => {
    try {
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

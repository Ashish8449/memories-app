export default (state = {}, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify(action.data));
      console.log(action.data);
      return { ...state, authData: action.data };
      break;
    case "LOGOUT":
      return { ...state };
      break;

    default:
      break;
  }
  return state;
};

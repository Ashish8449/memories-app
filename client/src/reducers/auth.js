export default (state = {}, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify(action.data));
     
      return { ...state, authData: action.data };
      break;
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
      break;

    default:
      break;
  }
  return state;
};

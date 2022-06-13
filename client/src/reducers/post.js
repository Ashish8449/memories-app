export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;
    case "CREATE":
      return [...posts, action.payload];
      break;

    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      break;
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      break;

    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
      break;

    default:
      break;
  }
  return posts;
};

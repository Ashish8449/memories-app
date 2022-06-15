import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustome = token.length < 500;
    let decodData;
    if (token && isCustome) {
      decodData = jwt.verify(token, "ahsidjfkfdjfkdfj");
      req.userId = decodData?.data;
    } else {
      decodData = jwt.verify(token);
      req.userId = decodData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

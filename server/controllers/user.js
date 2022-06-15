import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await User.findOne({ email: email });
    if (!existing) {
      return res.status(404).send({ message: "User does not exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existing.password);

    if (!isPasswordCorrect) {
      return res
        .status(404)
        .send({ message: "Invalid user email and passowrd" });
    }
    const token = jwt.sign(
      {
        email: existing.email,

        id: existing.id,
      },
      "ahsidjfkfdjfkdfj",
      { expiresIn: "1h" }
    );
    res.status(200).send({
      result: existing,
      token: token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
export const signup = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      res.status(401).send({ message: "password does not match" });
    }
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

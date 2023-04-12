import { Schema, Types, model } from "mongoose";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";

const { hash, compare } = bcryptjs;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 8);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

UserSchema.methods.getToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default model("user", UserSchema);

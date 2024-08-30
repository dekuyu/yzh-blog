import mongoose from "../db/MongodbConfig";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  avatar: { type: String },
  roles: { type: Array, default: ["user"] },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  isDelete: { type: Boolean, default: false },
});


const UserModel = mongoose.model("user", UserSchema)

export default UserModel
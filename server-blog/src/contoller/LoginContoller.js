// @ts-nocheck
import User from "../models/user";
// import jsonwebtoken from "jsonwebtoken";

class LoginController {
  /**
   * 用户登录
   * @param {*} ctx  前台登录提交数据
   */
  async login(ctx) {
    // 接收用户的数据
    const { body } = ctx.request;
    // 查库是否存此用户
    let user = await User.findOne({ username: body.username });
    // 验证用户密码是否正确
    if (body.password === user.password) {
      const userObj = user.toJSON();
      // 删除用户敏感信息
      const arr = ["password", "username"];
      arr.map((item) => {
        delete userObj[item];
      });
      // let token = jsonwebtoken.sign({ _id: userObj._id }, config.JWT_SECRET, {
      //   expiresIn: "1d",
      // });
      ctx.body = {
        code: 200,
        message: "登录成功",
        data: {
          user: userObj,
        },
      };
    } else {
      ctx.body = {
        code: 400,
        message: "用户名或密码错误",
      };
    }
  }

  /**
   * 用户注册
   * @param {*} ctx  前台注册提交数据
   */
  async register(ctx) {
    // 接收前台数据
    const { body } = ctx.request;
    // 查库，看用户名是否存在
    const user = await User.findOne({ username: body.username });
    let msg = {};
    let check = true;
    if (user !== null && typeof user !== "undefined") {
      msg.username = "用户名已存在";
      check = false;
    }
    // 如果用户名不存在，写入数据库
    if (check) {
      const user = new User({
        username: body.username,
        name: body.name,
        password: body.password,
      });
      const result = await user.save();
      ctx.body = {
        code: 200,
        message: "注册成功",
        data: result,
      };
      return;
    }
    ctx.body = {
      code: 400,
      message: msg,
    }
  }
}

export default new LoginController();

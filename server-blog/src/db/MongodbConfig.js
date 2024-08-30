import mongoose from "mongoose"
import config from "./index"

/** 创建连接 */
mongoose.connect(config.DB_URL)

/** 连接成功 */
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected success " + config.DB_URL)
})

/** 连接异常 */
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connected fail" + err)
}) 

/** 连接断开 */
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connected disconnected")
}) 

export default mongoose
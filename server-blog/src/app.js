import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'  // 设置头部来保护应用程序安全
import statics from 'koa-static'  // 静态资源处理
import koaBody from 'koa-body'  // 处理请求体
import jsonUtil from 'koa-json'  // 处理json数据
import cors from '@koa/cors'  // 处理跨域
import compose from 'koa-compose' // 整合中间件


const app = new Koa()

/** 
 *使用koa-compose集成中间件
 */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({pretty:false, param:'pretty'}),
  helmet()
])

app.use(middleware)

app.listen(10010)

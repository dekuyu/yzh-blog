const Koa = require('koa')
const Router = require('koa-router')   //路由
const app = new Koa()
const router = new Router()

router.get('/',ctx => {
  console.log(ctx)
  ctx.body = 'hello vue!'
})

router.get('/api',ctx => {
  console.log(ctx)
  ctx.body = 'hello api!'
})

app.use(router.routes()).use(router.allowedMethods()) // 启动路由

app.listen(3000)

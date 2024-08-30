import Router from 'koa-router'
import LoginController from '../../contoller/LoginContoller'

const router = new Router()

// 用户注册
router.post('/register', LoginController.register)

// 用户登录
router.post('/login', LoginController.login)

export default router


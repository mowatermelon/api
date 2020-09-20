const Router = require('koa-router')

module.exports = (app) => {
  // 创建一个路由的实例
  const router = new Router()

  // 根路由直接返回内容
  router.get('/', ctx => {
    ctx.body = 'hello watermelon~~~'
  })

  const testAPIArr = ['user', 'article']
  testAPIArr.map(item => {
    router.get(`/${item}`, ctx => {
      ctx.body = { success: 0, msg: `get ${item}~~~`, data: item }
    })
    router.post(`/${item}`, ctx => {
      ctx.body = { success: 0, msg: `post ${item}~~~`, data: item }
    })
    router.put(`/${item}`, ctx => {
      ctx.body = { success: 0, msg: `put ${item}~~~`, data: item }
    })
  })

  app
    .use(router.routes())
    .use(router.allowedMethods())
}

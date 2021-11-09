const Koa =  require('koa')
const route = require('koa-route');
const sign = require('./sign/signature')
const cors = require('koa-cors');
const app = new Koa();
const bodyParser = require('koa-bodyparser')  

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use(cors());

app.use(route.post('/wx', async (ctx, next) => {

  let { url } = ctx.request.body

  const wxData = await sign(url)

  let data = JSON.stringify({
    status: Object.keys(wxData).length >= 1 ? 'ok' : 'fail',
    data: wxData
  })
  ctx.body = data
}))


app.listen(2000)
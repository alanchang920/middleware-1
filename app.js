const express = require("express")
const port = 3000
const app = express()


let demoLogger = (req, res, next) => {
  let formattedData = new Date().toLocaleString()
  let method = req.method;
  let url = req.url
  let log = `[${formattedData}] | ${method} from ${url} `
  console.log(log)
  next()
};

app.use(demoLogger);

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

import express from 'express'
import routes from './routes/index'

const app = express()
export const port = 3333

app.use(express.json())
app.use(routes)

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.listen(port, () => console.log(`\n\n\n **** Server is running, port: ${port} ****\n\n\n`))

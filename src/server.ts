import app from '@core/app'

app.server.listen(process.env.PORT, function () {
  console.log(`Server sendo iniciado com a porta: ${process.env.PORT}`)
})

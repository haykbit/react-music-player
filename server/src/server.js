const app = require('./app')
const dotenv=require('./dotenv')

//Setting up config file

dotenv.config({path: 'server/config/config.env'})


app.listen(process.env.PORT,()  =>  {
    console.log(`Server started on PORT: ${process.env.PORT} in process ${process.env.PORT} mode.`)
})
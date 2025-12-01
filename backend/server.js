const express =  require('express');

const cors  =  require('cors')

const app = express();
const productRoutes = require('./routes/route')
app.use(cors())
app.use(express.json())
app.use('/product',productRoutes)
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})
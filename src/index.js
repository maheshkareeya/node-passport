const express = require('express')
const app = express();
app.set('port', 3001 || process.env.PORT )
app.get('/',(req,res)=>{
    res.send("heythere")
})
app.listen(app.get('port'))
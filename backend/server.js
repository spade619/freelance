const express = require('express')
const port = 4000



// set the server
const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
//endpoint
app.post('/test/', (req, res) => {
    
    const array = [];
    
    const increaseJson = {
       
            numbers: req.body.key1 + 1
    }
    const decreaseJson = {
      
        numbers: 5
}
    console.log(req.body.key1)
    res.send(increaseJson)
  })



//error handler overwrite

//server listening to port number initiated
app.listen(port, () => console.log(`Server started on port ${port}`))
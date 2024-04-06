
const express = require("express");
const http = require("http")
const app = express()
const port = 4000


app.get('/data',function(req,res){
    res.json({
        name:"<b>fiasco</b>",
        age:21
    })
})


// create- post
//read-get
//update-put
//delete-delete
app.get('/hello', (req, res) => {
    let a=0;
    console.log("request has been reached");
    for(let i=0; i<100; i++){
        a=a+1;
    }
  res.send('Hello <b>fiasco</b> to World!');
})

app.post('/posting',(req,res) => {
    console.log(req.headers)
    res.send({
        msg: "2+2=4"
    });
})

app.listen(port)
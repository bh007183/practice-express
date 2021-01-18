const express = require("express")
const path = require('path')
const fs = require("fs")
const { response } = require("express")

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
///////////////////////////////////////////////////////

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/api/data", function(req, res){
    fs.readFile(path.join(__dirname, "/jb.json"), "utf8", function(err, data){
     if (err) throw err
     res.json(req.body)
     const statData = JSON.parse(data)
     statData.push(req.body)
     fs.writeFile(path.join(__dirname, "/jb.json"), JSON.stringify(statData), (err)=>{
         if(err) throw err
     })
     
    })
})

app.get('/api/data', function(req, res){
    fs.readFile(path.join(__dirname, "/jb.json"), "utf8", (err, data) => {
        res.json(data)
    })
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
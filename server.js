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
     const statData = JSON.parse(data)
     statData.push(request.body)
     fs.writeFile(path.join(__dirname, "/jb.json"), JSON.stringify(statData), (err)=>{
         if(err) throw err
     })
     
    })
})

app.get('/api/data', function(req, res){
    fs.readFile(path.join(__dirname, "/index.html"), "utf8", (err, data) => {
        response.json(request.body)
    })
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
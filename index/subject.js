const express = require('express')

const upload = require ('express-fileupload')

const app = express()
app.use(upload())


app.get("/", (req, res) =>{

    res.sendFile(__dirname + '/upload.html')
})


app.post('/', (req, res)=>{
    if(req.files)
    {
        console.log(req.files)
        var file = req.files.file
        var filename = file.name
        console.log("File Name is : " + filename)

        file.mv('./uploads/' + filename, function(err){
            if (err){
                res.send(err)
            } else{
                res.send(filename + "  " + "Uploaded Successfully ")
            }
        })

    }
})


app.listen(6200)

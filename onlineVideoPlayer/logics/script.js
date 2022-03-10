const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname, "..", "media")
console.log(dirPath)

fs.readdir(dirPath, (err, files)=>{
    files.forEach((item)=>{
        addVids(item)
    })
})

function addVids(fileName){
    const files = document.createElement("btn")
    files.innerHTML(fileName)

}
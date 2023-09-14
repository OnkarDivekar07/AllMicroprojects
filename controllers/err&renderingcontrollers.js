const path = require('path');

exports.errorroute = (req, res, next) => {
    res.status(404).send("<h1>This page is not found</h1>")
}

exports.rendering = (req, res) => {
    console.log('html displayed')
    res.sendFile(path.join(__dirname, '../', 'view', 'index.html'))
}
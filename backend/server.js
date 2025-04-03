const http = require('http')

const getRequest = require('./methods/get')
const postRequest = require('./methods/post')
const deleteRequest = require('./methods/delete')
const defaultRequest = require('./methods/default')

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'aplication/json')
    res.setHeader('Access-Control-Allow-Origins', '*')

    switch (req.method) {
        case 'GET':
            return getRequest(req, res);
        case 'POST':
            return postRequest(req, res);
        case 'DELETE':
            return deleteRequest(req, res);
        default:
            return defaultRequest(req, res)
    }
})

const port = 4090

server.listen(port, () => {
    console.log('Server Dinlemeye Basladi')
})


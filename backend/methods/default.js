
const defaultRequest = (req, res) => {
    res.statusCode = 404
    // res.setHeader('Content-Type', 'aplication/json')
    res.write(JSON.stringify({ message: 'istek adresi tanımsız.' }))
}


module.exports = defaultRequest
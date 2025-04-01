const bodyParser = require("../utils/bodyParser")

const postRequest = async (req, res) => {
    if (req.url === "api/movies/") {
        const body = await bodyParser(req)
        console.log("gelen body", body)
        res.end('film olusturuldu')
    } else {
        res.writeHead(404);
        res.end("Gecersiz yls istek atıldı")
    }

}



module.exports = postRequest
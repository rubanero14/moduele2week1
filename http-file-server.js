const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
var data = fs.createReadStream(process.argv[3]);
//res.send(data.toString())
data.pipe(res);
})
server.listen(process.argv[2]);
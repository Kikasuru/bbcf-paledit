const http = require("http");
const fs = require("fs");

//Start the server.
const server = http.createServer(httpServer).listen(443);
console.log("HTTP Server hosted at port "+443);

//Server Function.
function httpServer(req, res) {
    //Read the HTML File.
    fs.readFile("./public"+((req.url==="/")?"/index.html":req.url),function(err,data){
        if(err) {
            //Log errors if any.
            console.log(err);
            switch(err.errno){
                case -4058:
                    //404 - Not found
                    res.writeHead(404);
                    res.end("404 - Sorry, something went wrong!");
                    break;
                default:
                    //500 - Internal Server Error
                    res.writeHead(500);
                    res.end("500 - Sorry, something went wrong!");
                    break;
            }
        }
        //200 - OK
        res.writeHead(200);
        //Send the data and end the connection.
        res.end(data);
    });
}

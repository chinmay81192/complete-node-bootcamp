const fs = require("fs");
const http = require("http");
const url = require("url");

//Sync
const text = fs.readFileSync("./txt/input.txt","utf-8")
console.log(text)

const textOutput = `This is another text, ${text}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);


// //Async
// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log(data);
  
//   fs.writeFile("./txt/output-async.txt", `This is another text, ${data}.\nCreated on ${Date.now()}`, (err) => {
//     if (err) {
//       console.error("Error writing file:", err);
//       return;
//     }
//     console.log("File written successfully.");
//   });
// });

// console.log("Reading...")

 const data = fs.readFileSync(__dirname +"/dev-data/data.json", "utf-8");
 const dataObject = JSON.parse(data);

//Server
const server = http.createServer((req,res) => {
    console.log(req.url)

    const pathName = req.url;
    if(pathName === "/" || pathName === "/home") {
        res.end("Home")
    }
    if(pathName === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dataObject));
    }
    else if(pathName === "/about") {
            res.end("About")
    }
    else {
        res.writeHead(404)
        res.end("<h1>Hello from the server!</h1>");
    }
   
});
server.listen(8000,"localhost", () => {
    console.log("Server is running on port 8000");
});
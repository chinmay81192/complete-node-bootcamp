import fs from "fs";
import http from "http";

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

//Server
const server = http.createServer((req,res) => {
    res.end("Hello from the server!");
});
server.listen(8000,"localhost", () => {
    console.log("Server is running on port 8000");
});
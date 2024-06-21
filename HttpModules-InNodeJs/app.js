const http = require("http");

// bar bar manually server chalne sei bachne ke liye nodemon as a dev dependency use krnege and after that command run krenge npx nodemon file name
const server = http.createServer((req,res)=>{
    res.end("Hi there"); // lekin agr isme  kuch change krein toh wo change ni hoga uske liye hume server khud sei dubara manually run krna pdeiga
})

server.listen(3000);   // ye dev port hota hai isliye usually hum isme save krte hai

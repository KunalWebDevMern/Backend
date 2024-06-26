// sabse pehle hume likhna pdeiga npm i cors


const express = require('express') ; 
const app = express();  
const cors = require('cors');

// yahan pe humne kya kiya hai ki corse naam ke pacakge ko install krke as a middleware setup kr diya hai .

// app.use(cors()); // iske likhne ke baad sei kya hoga ki other domain wale bhi iss route ya saare route ko access kr payenge

app.get("/", (req, res,next) => {
  res.send("something about main page");
})

//agr apko aisa ni chaiye ki sare route accesible ho toh uske liye nice dekho kaise krna hai ek route ya jis bhi route ko shareable bnana hai 

app.get("/shareable",cors(), (req, res,next) => {   // aise likhte hain agr kisi rpute ko shareable krna ho toh 
  res.send("something about main page");
});

app.listen(3000);
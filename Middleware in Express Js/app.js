// Aisa koi bhi function jo 3 cheezein accept krein jaise req res next usei middleware function kehte hain 
// And middleware ko express js mei  use krne ke liye app.use me use krna hoga ni toh express ko pta ni lgeiga ki ye middleware function hai ki nhi .

const express = require('express') ; 
const app = express();  

app.use(function (req, res, next) {  // is use ka fayada ya hai ki aap ka koi bhi route chlne sei pehle yei chleiga and ikse baad kaam hone ke liye hume  next ka use krna pdeiga taki agei wala kaam ho skei ya anyei middle ware pe ja skei
  console.log("hey hello");
  next(); 
})

app.get("/", (req, res) => {
  res.send("something about main page");
})

app.get('/about', function (req, res) { 
  res.send('something about  about page')
})


app.listen(3000);
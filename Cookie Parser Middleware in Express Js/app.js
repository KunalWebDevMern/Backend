const express = require('express') ; 
const app = express();  
const cookieParser = require('cookie-parser');

app.use(cookieParser()); // ye krne sei mil jaeigi value ya hum read kr skte hain cookieParser ko ab
app.get("/", (req, res,next) => {
  res.send("hey");
})
app.get("/check", (req, res,next) => {
  console.log(req.cookies.name);
  res.send("checking");  // abhi hum isko read ni kr skte toh isliye liye hume cookie parser k jrurat pdeigi 
})
app.get("/banned", (req, res,next) => {
  res.cookie("name","harsh");  // backend sei kuch bhi bheijne ke liye response ka istmaal hota hai  
  //isme aap jo bhi chij kisi name sei save krna hai toh uska name likhein and 2nd chiz kya set kr rhein wo likho 
  // iske baad apko ya toh response ko end krna pdeiga ya kuch toh send krna pdeiga 
  res.send("banned");
})

app.listen(3000);
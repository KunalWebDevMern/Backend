// connect flash ko use krne ke liye hume expressSession ko install and setup krna hoga

const express = require('express') ; 
const app = express();  
const ExpressSession = require('express-session');
const flash = require('connect-flash'); 

app.use(ExpressSession({
  secret: "anything you like",  
  resave: false,  
  saveUninitialized: false,
}));

app.use(flash());  // isko krne sei hum flash messages use kr skte hain 

app.get("/", (req, res,next) => { 
  req.flash("error","invalid Credentials") // for example agr koi bhi kabhi bhi ye / route pe ata hai toh hum yahan bol skte ki data create kro server pe kese create kro wo hai req.flash pehli cheiz wo denge ki kis name sei data save krna hai and dusri chiz kya save krna hai .
  res.redirect("/error"); // aur yahan sei hum kisi aur route pe redirect kr skte hain
})

// ab hum route bna skte hai /error name sei

app.get("/error",(req,res,next)=>{
  let message = req.flash("error")// yahan pe hum message ko read kr skte hain and hume provide krna hoga req.flash mei kiss name sei data save kiya hai
  res.send(message) // idhr sei hum send kr skte hain message user ko 
})


app.listen(3000); 
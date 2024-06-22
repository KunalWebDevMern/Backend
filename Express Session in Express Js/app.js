const express = require('express') ; 
const app = express();  
const ExpressSession = require('express-session');
 
// yei setup hai express session ka
app.use(ExpressSession({
  secret: "anything you like",  // aise key ko secure ni krna hai bec baad me jab hum app creation dekhenge tab hum krenge dure tarike sei secure keye ko and iske andar jo bhi likhoge tab apki key encrypt hogi 
  resave: false,  // iske matlab yei hua ki agr koi session hai usme kuch bhi change ni hua toh kya aap usei firse save krna chate ho toh bilkul nhi 
  saveUninitialized: false,// iska mtlb yei hua ki maan lo ki agr koi user hai and usne koi login ni kiya ya phir koi session create ni kiya toh kya aap uss user ko bhi save krna chaoge toh bilkul nhi . bec mujhe koi aisa user nhi create krna jo ki blank session create krei
}));

// iss session ke setup ke baad hum kisi bhi url pe session ko create or read kr skte hain


app.get("/", (req, res) => {
  res.send("something about main page");
})

//session ko create aise krte hain
app.get("/create", (req, res) => {
  req.session.polo = true;
  res.send("done");
})

// session ko log krte hain 
// ek baat ka dhiyan rkhna bus ki jab bhi aap isme kuch bhi change krnege toh nodemon ki bjei sei server restart ho jaeiga wo check ki value undefined milegi matlab yeh hai ki wo value loose kr deiga

app.get("/check", (req, res) => {
  console.log(req.session.polo);
})


app.listen(3000);
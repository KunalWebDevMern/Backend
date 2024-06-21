const express = require('express') ; // ye abhi express save hua variable me lekin isse use ni kr skte bec abhi ye blocked hai
const app = express();  // iska jo feature tha wo app name ke variable me save ho gya hai ab isko hum use kr skte hain

app.get("/", (req, res) => {
  res.send("something about main page");
})

app.get('/about', function (req, res) {  // get ka mtlb hua ki aap url kholiye ya phir iska matlb hua ki aap frontend sei data manga rhe ho  and iska ye matalb bhi yei hota hai ki yaha sei kuch bheij rhe ho 
  // pehli chiz isme deni hai route and dusra ek handler function  , iska matalb ye hua ki kabhi is route pe jaye toh yeh handler yani yei function chlana , And technically ye ek middleware function hai jo ki ek req handler hai 
  res.send('something about  about page')
})

app.get("*", (req, res) => {  // ye * mtlb hua ki ye sare route pe work kreiga isliye isko last me likhna hota hai taki niche wale url ko overlap na krei .
  res.send("If nothing works ,I will");
})

app.listen(3000);
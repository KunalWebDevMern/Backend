const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("short")); // iske jaise aur bhi method hai iss morgon ke jo hume info data hai ek route pe gye hain uska 

app.get('/', function (req, res, next) {
  res.send('Hello World');
});

app.listen(3000);
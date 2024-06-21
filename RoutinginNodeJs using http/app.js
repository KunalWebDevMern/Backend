const { log } = require("console");
const http = require("http");

// routing - sei aap alg alg url bna skte ho  and unpr kya hoga ye bhi taiy hoga yei bhi tay kr skte ho

const server = http.createServer((req, res) => {
  // frontend sei kuch data aa rha hai toh hum baat krenge req ki and idhr sei kuch bheij rhe hain toh baat hogi res ki
  if (req.url === "/") res.end("Hello");
  else if (req.url === "/about") res.end("About");
  else res.end("page not forund");
});

server.listen(3000);

const express = require("express");
const rateLimit = require('express-rate-limit');
 
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Too many requests, please slow down' }
});

const app = express();
app.use(express.json());
app.use(limiter); 

app.listen(8080, () => {
  console.log("API Gateway running on port 8080");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const express = require("express");
const app = express();
app.use(express.json());

app.post("/chat", (req, res) => {
  res.json({ answer: "Hello from dummy chatbot" });
});

app.listen(4000, () => console.log("Chatbot running on port 4000"));

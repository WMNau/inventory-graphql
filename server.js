const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true });
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));

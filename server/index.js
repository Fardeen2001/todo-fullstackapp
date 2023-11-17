const express = require("express");
const app = express();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`your port is successfully running on port:${PORT}`);
});

const express = require('express');
const app = express();
const hostname = "0.0.0.0";
const port = 3010;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
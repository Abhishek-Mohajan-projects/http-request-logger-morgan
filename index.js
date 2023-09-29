const express = require('express');
const app = express();
const morgan = require("morgan");
const PORT = 4000;

app.use(morgan("dev"));

app.get("/products", (req, res) => {
    res.status(200).send("get all listed products")
});

app.post("/products", (req, res) => {
    res.status(200).send("post all listed products")
});



app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
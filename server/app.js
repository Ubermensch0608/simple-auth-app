const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.NODE_ENV || 8080;

app.get("/", (req, res) => {
  res.send(`<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const indexRoute = require("./routes/index");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

app.set("port", process.env.NODE_ENV || 8080);

app.use("/", indexRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
});

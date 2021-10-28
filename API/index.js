const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const path = require("path");
const app = express();
const { rootRouter } = require("./routers/root.router");
const publicDirectlyPath = path.join(__dirname, "/");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true
  })
);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicDirectlyPath));
app.use("/api", rootRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running port ${PORT}`);
});

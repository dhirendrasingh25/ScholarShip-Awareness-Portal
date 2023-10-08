const express = require("express");
const server = express();
const mongoose = require("mongoose");
const scholarshipRouters = require("./routes/scholarshipRoutes");
const studentRouters = require("./routes/studentRoutes.js");
const authRouters = require("./routes/userRoutes");
const companyRoutes = require("./routes/companyRoutes");
const cors = require("cors");

server.use(cors());
server.use(express.json());

server.use("/scholarships", scholarshipRouters.router);
server.use("/students", studentRouters.router);
server.use("/", authRouters.router);
server.use("/company", companyRoutes.router);

async function main() {
  await mongoose.connect(
    "mongodb+srv://shaikhsho292:8v0FXY7VpEbXazDK@cluster0.hwfnu4k.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database Connected");
}
main().catch((err) => console.log(err));

server.get("/", (req, res) => {
  res.json({ status: "Found" });
});

server.listen(8080, () => {
  console.log("Server Started");
});

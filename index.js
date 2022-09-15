const express = require("express");
const dotenv = require("dotenv");
const connectDB =require("./config/connectDB")
const userRoute = require("./routes/userRoute")
const morgan = require("morgan")


dotenv.config();
const app =express();
connectDB();

//middlewares
app.use(express.json())
app.use("/api/users",userRoute)
app.use(morgan("dev"))

app.get("/",(req, res,) => {
  res.send("Welcome to our school portal")
});



const  PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(`server is running on ${PORT}`))
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbCon from "./utils/db.js";
const app = express()

import petRoute from './route/pet.route.js'
import userRoute from './route/user.route.js'
import contactRoute from './route/contact.route.js'


dotenv.config();
const PORT = process.env.PORT || 4002;


dbCon();
app.use(cors());
app.use(express.json());

//defining routes
app.use("/pet", petRoute);
app.use("/Paws", petRoute);
app.use("/user", userRoute);
app.use('/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Server ruuning on port ${PORT}`)
})
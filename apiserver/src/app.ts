import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser"
const helmet = require("helmet")

import AuthRoutes from "./routes/auth_route"

dotenv.config()
const app: Express = express();


app.use(express.json())
app.use(morgan("dev"))
app.use(helmet())
app.use(cookieParser())


//Routes
app.use("/api/v1/auth", AuthRoutes)


app.listen(process.env.PORT || 8000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.APP_PORT}`);
  });
  
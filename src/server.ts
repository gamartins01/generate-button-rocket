import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "./database";
import { router } from "./routes"
import { errorMiddleware } from "./middewares/errorMiddeware";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

app.listen(5000, () => console.log("Server is running"));
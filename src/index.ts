import express from "express";
import cors from "cors"

import { instaRoutes } from "./routes/insta.routes";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/insta", instaRoutes);

export { app };
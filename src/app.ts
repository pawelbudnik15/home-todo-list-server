import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.use("/api", taskRoutes);

export default app;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import taskRouter  from "./routes/tasks";

dotenv.config();

const app = express();



// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:3000"], // Replace with your frontend URL
        credentials: true,
      }
));
app.use(bodyParser.json());
app.use("/tasks", taskRouter);
// Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});


export default app;
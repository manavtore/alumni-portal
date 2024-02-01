import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute";
import postRoutes from "./routes/postRoute";

import errorfn from "./middlewares/error";

// import metadataRoutes from "./routes/metadataRoute";
import cors from "cors";

const app = express();
//cookie body and encoded url configurations
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
    ],
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: process.env.FRONTEND_URL,
    credentials: true,
    preflightContinue: true,
  })
);

//defining all routes here
app.use("/api", userRoutes, postRoutes);

//error middleware
app.use(errorfn);

export default app;

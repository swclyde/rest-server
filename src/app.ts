import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Router from "./routes";

const port = process.env.PORT || 3000;

const app : Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);
  
app.listen(port, () => {
  console.log("Server is running on port", port);
});

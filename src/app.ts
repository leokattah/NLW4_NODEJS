import "reflect-metadata";
<<<<<<< HEAD
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import createConnection from "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";
=======
import express from 'express';
import createConnection from "./database";
import { router } from "./routes";
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5

createConnection();
const app = express();

app.use(express.json());
app.use(router);

<<<<<<< HEAD
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error ${err.message}`,
    });
  }
);

export { app };
=======
export { app };
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5

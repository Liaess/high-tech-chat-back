import "./";
import "express-async-errors";
import express, { json, Express } from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./database";

export class App {
  public server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(cors());
    this.server.use(json());
  }

  private routes() {
    // this.server.use(routes).use(errorHandler);
  }

  public async init(): Promise<Express> {
    connectDB();
    return this.server;
  }

  public async close(): Promise<void> {
    await disconnectDB();
  }
}

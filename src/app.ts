import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import type { Application, Request, Response, Router } from 'express';
import type { Routes } from './interfaces/routes.interface';

export default class App {
  public app: Application;
  public port: string | number;
  constructor(routes: Routes[]) {
    (this.app = express()), (this.port = process.env.PORT || 'development');
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen(): void {
    this.app
      .listen(this.port, (): void => {
        console.log(`express listen on PORT: ${this.port}
	🚀 goto : http://localhost:${this.port}/
	`);
      })
      .on('error', (error: Error): void => {
        console.error('error: ', error);
        if (typeof this.port === 'number') {
          this.app.listen((this.port as number) + 1);
        }
      });
  }
  public getServer(): Application {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  private initializeRoutes(routes: Routes[]): void {
    routes.forEach((route: Routes): void => {
      this.app.use('/', route.router);
    });
  }
}

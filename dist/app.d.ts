import 'dotenv/config';
import type { Application } from 'express';
import type { Routes } from './interfaces/routes.interface';
export default class App {
    app: Application;
    port: string | number;
    env: string;
    constructor(routes: Routes[]);
    listen(): void;
    getServer(): Application;
    private initializeMiddlewares;
    private initializeRoutes;
}

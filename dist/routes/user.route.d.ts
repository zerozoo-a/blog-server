import { Routes } from '../interfaces/routes.interface';
import UserController from '../controllers/users.controller';
export default class UserRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    userController: UserController;
    constructor();
    private initializeRoutes;
    addSomething(a: number, b: number): number;
}

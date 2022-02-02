import IndexController from '../controllers/index.controller';
import { Routes } from '../interfaces/routes.interface';
export default class IndexRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    indexController: IndexController;
    constructor();
    private initializeRoutes;
}

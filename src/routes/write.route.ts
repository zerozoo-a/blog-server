import { NextFunction, Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import type { Request, Response } from 'express';
import WriteController from '../controllers/write.controller';
export default class WriteRoute implements Routes {
  public path = '/write';
  public router = Router();
  public writeController = new WriteController();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get(`${this.path}`, (req: Request, res: Response) => {
      res.send('hello guys');
    });
    this.router.post(`${this.path}`, this.writeController.post);
  }
}

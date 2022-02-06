import type { Request, Response, NextFunction } from 'express';
export default class UserController {
  public mainView(req: Request, res: Response): void {
    res.status(200).send('Hello MVC');
    return;
  }
}

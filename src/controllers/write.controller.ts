import type { Request, Response } from 'express';

export default class WriteController {
  public post(req: Request, res: Response): void {
    console.log('editor: ', req.body);
    return;
  }
}

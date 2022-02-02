import type { NextFunction, Request, Response } from 'express';
declare class IndexController {
    index: (req: Request, res: Response, next: NextFunction) => void;
    mainView: (req: Request, res: Response) => void;
}
export default IndexController;

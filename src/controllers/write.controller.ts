import type { Request, Response } from 'express';
import Pooler from '../databases';

export default class WriteController {
  public async post(req: Request, res: Response): Promise<void> {
    console.log('editor: ', req.body);
    function queryFact(tableName: string): string {
      const query: string = `
    CREATE TABLE ${tableName}(
	    id MEDIUMINT(99) NOT NULL AUTO_INCREMENT,
	    title VARCHAR(20) NOT NULL,
	    content TEXT NOT NULL,
	    date DATETIME,
	    CONSTRAINT ${tableName} PRIMARY KEY(id)
	    );`;
      return query;
    }
    const db = new Pooler().pool;

    try {
      await db.execute(queryFact('posts'));
    } catch (error) {
      console.error(error);
    }

    return;
  }
}

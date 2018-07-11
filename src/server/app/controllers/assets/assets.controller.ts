/**
 * authorize
 */
import * as debug from 'debug';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs-extra';
import { errorProsess } from '../base/base.controller';
const log = debug('entame-frontend:authorize');

/**
 * imageリスト取得
 * @param {Request} req
 * @param {Response} res
 */
export async function getImages(_req: Request, res: Response, _next: NextFunction) {
    log('getImages');
    try {
       const dir = await fs.readdir(`${__dirname}/../../../../client/${process.env.NODE_ENV}/assets/images`);
        res.json({
            dir: '/assets/images',
            files: dir
        });
    } catch (err) {
        errorProsess(res, err);
    }
}

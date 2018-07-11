"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * authorize
 */
const debug = require("debug");
const fs = require("fs-extra");
const base_controller_1 = require("../base/base.controller");
const log = debug('entame-frontend:authorize');
/**
 * imageリスト取得
 * @param {Request} req
 * @param {Response} res
 */
function getImages(_req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        log('getImages');
        try {
            const dir = yield fs.readdir(`${__dirname}/../../../../client/${process.env.NODE_ENV}/assets/images`);
            res.json({
                dir: '/assets/images',
                files: dir
            });
        }
        catch (err) {
            base_controller_1.errorProsess(res, err);
        }
    });
}
exports.getImages = getImages;

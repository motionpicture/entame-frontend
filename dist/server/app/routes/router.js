"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorize = require("../controllers/authorize/authorize.controller");
exports.default = (app) => {
    app.use((_req, res, next) => {
        res.locals.NODE_ENV = process.env.NODE_ENV;
        next();
    });
    app.get('/api/authorize/getCredentials', authorize.getCredentials);
    app.get('/api/authorize/signIn', authorize.signIn);
    app.get('/api/authorize/signOut', authorize.signOut);
    app.get('/signIn', authorize.signInRedirect);
    app.get('/signOut', authorize.signOutRedirect);
    app.get('/', (_req, res, _next) => {
        res.sendFile(`${__dirname}/dist/client/${process.env.NODE_ENV}/index.html`);
    });
};

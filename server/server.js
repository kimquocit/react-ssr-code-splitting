import express from 'express';
import Loadable from 'react-loadable';
import router from './router';

const PORT = 8080;
const app = express();

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
}

app.use(ignoreFavicon);
app.use(router);

Loadable.preloadAll().then(() => {
    app.listen(PORT, (error) => {
        if (error) {
            return console.log('Error', error);
        }
        console.log("Server listening on " + PORT + "...");
    });
});
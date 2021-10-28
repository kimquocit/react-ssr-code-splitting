import manifest from '../build/asset-manifest.json';

const path = require("path");
const fs = require("fs");

// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

export default (req, res, store, html) => {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        const modules = [];
        const reduxState = JSON.stringify(store.getState());

        // map required assets to script tags
        const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);

        return res.send(
            htmlData
                .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
                .replace('__PRELOADED_STATE__={}', `__PRELOADED_STATE__=${reduxState}`)
                .replace('</body>', extraChunks.join('') + '</body>')
        );
    });
}

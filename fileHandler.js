const fs = require('fs');
var path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.ico': 'image/x-icon'
};

module.exports = (url, req, response) => {

    const filePath = '.' + url.pathname;
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname];
    console.log(filePath);
    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./public/pages/404.html', function (error, content) {
                    response.writeHead(404, {
                        'Content-Type': contentType
                    });
                    response.end(content);
                });
            } else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }

        } else {
            response.writeHead(200, {
                'Content-Type': contentType
            });
            response.end(content);
        }
    });
}
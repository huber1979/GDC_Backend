var express = require('express');
var fs = require('fs');

var app = express();


app.get('/:tipo/:arch', (req, res, next) => {

    var tipo = req.params.tipo;
    var arch = req.params.arch;

    var path = `./uploads/${ tipo }/${ arch }`;

    fs.exists(path, existe => {

        if (!existe) {
            path = './assets/celula.pdf';
        }


        res.sendfile(path);

    });


});

module.exports = app;
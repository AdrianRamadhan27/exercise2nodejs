const express = require('express');
const app     = express();

app.get('/', function(req, res) {
    res.send('Ini adalah Halaman Home');
});

app.get('/product', function(req, res) {
    res.send('Ini adalah Halaman Product');
});

app.get('/detailproduct', function(req, res) {
    res.send('Ini adalah Halaman Detail Product Toko Anda');
});

app.listen(8000, function() {
    console.log('Aplikasi ini berjalan pada port 8000!');
});
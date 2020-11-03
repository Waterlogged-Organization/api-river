/**
 * @author Hutinet Maxime <maxime@hutinet.ch>
 * @author Foltz Justin <justin.foltz@gmail.com>
 */

"use strict"

const express = require('express');
const app = express();
const PORT = 8082;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.send('Hello from API River');
});

app.listen(PORT, HOST);
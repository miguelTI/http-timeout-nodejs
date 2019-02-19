'use strict'
const app = require('./app.js');
const port = process.env.PORT ? process.env.PORT : 3333;

app.listen(port, () => {
    console.log(`Timeout server working on port:${port}`);
});
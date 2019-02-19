'use strict'

function timeout(req, res) {
    var seconds = req.query.t ? req.query.t : 3;
    if (isNaN(seconds) || !Number.isInteger(Number(seconds)) || Number(seconds) < 0) {
        res.status(400).send('t parameter should be an integer');
        return;
    }
    console.log(`Waiting ${seconds} second(s)`);
    setTimeout(() => {
        console.log("Alohomora!");
        res.status(200).send('OK');
    }, seconds * 1000);
}

module.exports = timeout
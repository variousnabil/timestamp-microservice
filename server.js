const express = require('express');
const app = express();

app.listen(8000);

app.get('/api/timestamp', (req, res) => {
    res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    });
});

app.get('/api/timestamp/:date_string', (req, res) => {
    const dateString = req.params.date_string;
    const isTimestamp = dateString > 0;
    const isDate = (new Date(dateString).getTime()) > 0;

    let result = {};

    if (isTimestamp) {
        const timestamp = Number(dateString);
        result = {
            unix: timestamp,
            utc: new Date(timestamp * 1000).toUTCString()
        }
    } else if (isDate) {
        result = {
            unix: new Date(dateString).getTime(),
            utc: new Date(dateString).toUTCString()
        }
    } else {
        result = {
            "error": "Invalid Date"
        }
    }
    res.json(result);
});
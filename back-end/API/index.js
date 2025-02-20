const fs = require('fs').promises;
const path = require('path');
const { port, host, eventUrl, databaseFolder, eventFile } = require("../utils");
const express = require('express');
const app = express();

app.get(eventUrl, async (req, res) => {
    const filePath = path.join(__dirname, '..', databaseFolder, eventFile);
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    } catch (error) {
        console.error('Error reading or parsing file:', error);
        res.status(500).send('An error occurred while reading or parsing the file.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

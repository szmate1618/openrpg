import config from './config.js';

import express from 'express';


const app = express();

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}.`);
});

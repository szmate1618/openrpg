'use strict';

const express = require('express');
const router = express.Router();
const { Users } = require('../models');

router.get('/', async (request, response) => {
    const users = await Users.findAll();
    response.json(users);
});

router.post('/', async (request, response) => {
    const user = request.body;
    await Users.create(user);
    response.json(user);
});

module.exports = router;

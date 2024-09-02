// import { Router } from 'express';
const Router = require('express');
const { Data } = require('../db/models');

const router = Router();

router.get('/data', async (req, res) => {
  try {
    const result = await Data.findAll();
    res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const AdviserService = require("../services/adviser.service");

const service = new AdviserService();

router.get("/all", async (req, res) => {
  const data = await service.getAllAdvisers();
  res.json(data);
});

router.get("/getSales", async (req, res) => {
  const data = await service.getSales();
  res.json(data);
});

router.post('/createUpdateSale', async (req, res) => {
  const data = await service.createUpdateSale(req.body);
  res.json({
    messaje: 'create',
    data: req.body
  });
});

router.post('/createUpdate', async (req, res) => {
  const data = await service.createUpdateAdviser(req.body);
  res.json({
    messaje: 'create',
    data: req.body
  });
});

router.delete('/delete/:id', async (req, res) => {
  const data = await service.deleteAdviser(req.params.id);
  res.json({
    messaje: 'delete',
    data: req.params.id
  });
});

router.get('/types', async (req, res) => {
  const data = await service.getAdvisersTypes();
  res.json(data);
});

module.exports = router;
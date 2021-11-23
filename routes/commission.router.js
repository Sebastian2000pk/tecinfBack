const express = require("express");
const router = express.Router();

const CommissionService = require("../services/commission.service");

const service = new CommissionService();

router.get('/getcommission', async (req, res) => {
  const data = await service.getCommission();
  res.json(data);
});

router.post('/createUpdate', async (req, res) => {
  const data = await service.createUpdateCommission(req.body);
  res.json({
    messaje: 'create',
    data: req.body
  });
});


module.exports = router;
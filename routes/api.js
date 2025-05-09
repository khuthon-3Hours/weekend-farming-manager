const express = require('express');
const router = express.Router();

// 테스트용 루틴 데이터
let routines = [
  { id: 1, crop: "상추", task: "물주기", date: "2025-05-09" }
];

router.get('/routines', (req, res) => {
  res.json(routines);
});

router.post('/routines', (req, res) => {
  const newRoutine = req.body;
  routines.push(newRoutine);
  res.status(201).json({ message: "추가 완료" });
});

module.exports = router;

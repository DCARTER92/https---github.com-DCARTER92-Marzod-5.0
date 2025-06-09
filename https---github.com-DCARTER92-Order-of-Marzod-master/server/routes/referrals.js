
const express = require('express');
const router = express.Router();
const db = require('../db');

// Check and reward referral
router.post('/use', (req, res) => {
  const { userId, referralCode } = req.body;
  const stmt = db.prepare('UPDATE users SET invited_by = ? WHERE id = ?');
  stmt.run(referralCode, userId, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

module.exports = router;

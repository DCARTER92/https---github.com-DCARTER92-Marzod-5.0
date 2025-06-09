
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Ban a user
router.post('/ban', (req, res) => {
  const { userId } = req.body;
  db.run('UPDATE users SET is_banned = 1 WHERE id = ?', [userId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// Unban a user
router.post('/unban', (req, res) => {
  const { userId } = req.body;
  db.run('UPDATE users SET is_banned = 0 WHERE id = ?', [userId], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});
module.exports = router;

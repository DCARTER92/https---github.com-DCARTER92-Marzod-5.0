
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new user
router.post('/register', async (req, res) => {
  const { username, password, inviteCode } = req.body;
  const code = Math.random().toString(36).substring(2, 10);
  const stmt = db.prepare('INSERT INTO users (username, password, code, invited_by) VALUES (?, ?, ?, ?)');
  stmt.run(username, password, code, inviteCode || null, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ userId: this.lastID, code });
  });
});

// Login (simplified)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const stmt = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?');
  stmt.get(username, password, (err, user) => {
    if (err || !user) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ userId: user.id, code: user.code });
  });
});

module.exports = router;

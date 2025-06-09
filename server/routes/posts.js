
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a post
router.post('/', (req, res) => {
  const { userId, content } = req.body;
  const stmt = db.prepare('INSERT INTO posts (user_id, content, created_at) VALUES (?, ?, datetime("now"))');
  stmt.run(userId, content, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ postId: this.lastID });
  });
});

// Get all posts
router.get('/', (req, res) => {
  db.all('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Vote on a post
router.post('/:id/vote', (req, res) => {
  const { vote } = req.body; // "up" or "down"
  const column = vote === 'up' ? 'upvotes' : 'downvotes';
  const stmt = db.prepare(`UPDATE posts SET ${column} = ${column} + 1 WHERE id = ?`);
  stmt.run(req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

module.exports = router;

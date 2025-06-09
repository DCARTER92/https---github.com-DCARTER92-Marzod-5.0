
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a comment
router.post('/', (req, res) => {
  const { userId, postId, content } = req.body;
  const stmt = db.prepare('INSERT INTO comments (user_id, post_id, content, created_at) VALUES (?, ?, ?, datetime("now"))');
  stmt.run(userId, postId, content, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ commentId: this.lastID });
  });
});

// Get comments for a post
router.get('/:postId', (req, res) => {
  const stmt = db.prepare('SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE post_id = ? ORDER BY created_at ASC');
  stmt.all(req.params.postId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;

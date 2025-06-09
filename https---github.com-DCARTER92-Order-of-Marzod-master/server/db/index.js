const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'marzod.db'));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT,
      code TEXT UNIQUE,
      invited_by TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      content TEXT,
      created_at TEXT,
      upvotes INTEGER DEFAULT 0,
      downvotes INTEGER DEFAULT 0
    )
  `);
});

module.exports = db;

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_id INTEGER,
      user_id INTEGER,
      content TEXT,
      created_at TEXT
    )
  `);

  db.run(`
    ALTER TABLE users ADD COLUMN is_banned INTEGER DEFAULT 0;
  `, () => {}); // ignore error if already added
});

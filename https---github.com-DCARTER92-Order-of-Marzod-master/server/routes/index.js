
const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const postRoutes = require('./posts');
const referralRoutes = require('./referrals');
const commentRoutes = require('./comments');
const adminRoutes = require('./admin');

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Order of Marzod API' });
});

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/referrals', referralRoutes);
router.use('/comments', commentRoutes);
router.use('/admin', adminRoutes);

module.exports = router;

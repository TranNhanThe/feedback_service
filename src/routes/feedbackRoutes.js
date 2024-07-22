const express = require('express');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();

// Route để tạo feedback
router.post('/feedback', feedbackController.createFeedback);

// Route để cập nhật feedback
router.put('/feedback/:id/more', feedbackController.updateFeedback);

module.exports = router;

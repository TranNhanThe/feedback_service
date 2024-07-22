const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    objectId: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        enum: ['like', 'dislike'],
        required: true,
    },
    chatId: {
        type: String,
        required: true,
    },
    messageId: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    },
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports = Feedback;

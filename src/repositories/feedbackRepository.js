const Feedback = require('../entities/feedback');

const feedbackRepository = {
    create: async (feedbackData) => {
        const feedback = new Feedback(feedbackData);
        return await feedback.save();
    },
    update: async (id, updateData) => {
        return await Feedback.findByIdAndUpdate(id, updateData, { new: true });
    }
};

module.exports = feedbackRepository;

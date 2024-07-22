const feedbackRepository = require('../repositories/feedbackRepository');

const feedbackUseCase = {
    createFeedback: async (feedbackData) => {
        return await feedbackRepository.create(feedbackData);
    },
    updateFeedback: async (id, updateData) => {
        return await feedbackRepository.update(id, updateData);
    }
};

module.exports = feedbackUseCase;

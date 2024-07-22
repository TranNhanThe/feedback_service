const feedbackUseCase = require('../usecases/feedbackUseCase');

const feedbackController = {
    createFeedback: async (req, res) => {
        try {
            const { objectId, rating, chatId, messageId } = req.body;

            // Validate input
            if (!objectId || !rating || !chatId || !messageId) {
                return res.status(400).json({ code: 400, message: 'Please enter all fields' });
            }

            const newFeedback = await feedbackUseCase.createFeedback({ objectId, rating, chatId, messageId });
            res.json({ code: 200, message: 'ok', data: newFeedback });
        } catch (err) {
            console.error(err);
            res.status(500).json({ code: 500, message: 'error' });
        }
    },
    updateFeedback: async (req, res) => {
        try {
            const { comment } = req.body;
            const { id } = req.params;

            // Validate input
            if (!comment) {
                return res.status(400).json({ code: 400, message: 'Please enter a comment' });
            }

            await feedbackUseCase.updateFeedback(id, { comment });
            res.json({ code: 200, message: 'ok' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ code: 500, message: 'error' });
        }
    }
};

module.exports = feedbackController;

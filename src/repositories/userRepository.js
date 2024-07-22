const User = require('../entities/user');

const userRepository = {
    findAll: async () => {
        return await User.find();
    },
    findById: async (id) => {
        return await User.findById(id);
    },
    create: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },
    update: async (id, userData) => {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    },
    delete: async (id) => {
        return await User.findByIdAndDelete(id);
    },
};

module.exports = userRepository;

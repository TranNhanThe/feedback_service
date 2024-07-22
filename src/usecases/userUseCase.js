const userRepository = require('../repositories/userRepository');

const userUseCase = {
    getAllUsers: async () => {
        return await userRepository.findAll();
    },
    getUserById: async (id) => {
        return await userRepository.findById(id);
    },
    createUser: async (userData) => {
        return await userRepository.create(userData);
    },
    updateUser: async (id, userData) => {
        return await userRepository.update(id, userData);
    },
    deleteUser: async (id) => {
        return await userRepository.delete(id);
    },
};

module.exports = userUseCase;

const userUseCase = require('../usecases/userUseCase');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userUseCase.getAllUsers();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await userUseCase.getUserById(req.params.id);
            if (!user) return res.status(404).json({ msg: 'User not found' });
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Validate input
            if (!name || !email || !password) {
                return res.status(400).json({ msg: 'Please enter all fields' });
            }

            // Tạo người dùng mới
            const newUser = await userUseCase.createUser({ name, email, password });
            res.json(newUser);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },
    updateUser: async (req, res) => {
        try {
            const updatedUser = await userUseCase.updateUser(req.params.id, req.body);
            if (!updatedUser) return res.status(404).json({ msg: 'User not found' });
            res.json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deletedUser = await userUseCase.deleteUser(req.params.id);
            if (!deletedUser) return res.status(404).json({ msg: 'User not found' });
            res.json({ msg: 'User removed' });
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    },
};

module.exports = userController;

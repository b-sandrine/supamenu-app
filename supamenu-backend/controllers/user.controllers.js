import User from '../models/user.models'

const userController = {
    getAllUsers: async () => {
        try {
            const users = await User.find();
            return users;
        }
        catch (error) {
            throw new Error('Failed to fetch users')
        }
    }
}

module.exports = userController;
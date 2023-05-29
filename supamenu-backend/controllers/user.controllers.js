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
    },
    getUser: async () => {
        try {
            const user = await User.findById({email: req.body.email })
            return user;
        }
        catch (error) {
            throw new Error('Failed to fetch the user')
        }
    },
    updateUserRecord: async () => {
        try {
            const user = await User.findById({email: req.body.email})
            if(!user) {
                return;
            }
        }
        catch(err) {
            throw new Error('Failed to update the record')
        }
    }
}

module.exports = userController;
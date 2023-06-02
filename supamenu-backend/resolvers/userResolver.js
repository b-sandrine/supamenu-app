import User from '../models/user.models'

const userResolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        getUser: async(_, {id}) => {
            return User.findById(id);
        },
    },
    Mutation: {
        createUser: async(_, {names, email, phonenumber, password}) => {
            const user = {names,email,phonenumber,password}
            const result = await User.create(user);
            console.log(result)
            return result;
        },
        updateUser: async(_, {id, names, email, phonenumber, password}) => {
            return User.findByIdAndUpdate(id, {names, email, phonenumber, password}, {new: true})
        },
        deleteUse: async (_, {id}) => {
            return User.findByIdAndRemove(id)
        },
    },
};

module.exports = userResolvers;
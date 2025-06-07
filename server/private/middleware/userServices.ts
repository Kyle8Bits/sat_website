import User, { IUser } from '../models/User';

export const createUser = async (data: IUser): Promise<void> => {
    const user = new User(data);
    user.save();
};

export const deleteUser = async (userId: string): Promise<boolean> => {
    const existingUser = await User.findById(userId);

    if (!existingUser) {
        return false;
    }

    await User.deleteOne({ _id: userId });

    return true;
};
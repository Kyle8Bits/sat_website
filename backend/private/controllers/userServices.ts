import User, { IUser } from '../models/User';
import bcrypt from 'bcrypt';

// export const createUser = async (data: IUser): Promise<void> => {
//     const user = new User(data);
//     user.save();
// };

export const deleteUser = async (userId: string): Promise<boolean> => {
    const existingUser = await User.findById(userId);

    if (!existingUser) {
        return false;
    }

    await User.deleteOne({ _id: userId });

    return true;
};

export const changePassword = async (
    userId: string,
    oldPassword: string,
    newPassword: string
): Promise<boolean> => {
    const existingUser = await User.findById(userId);

    if (!existingUser) {
        return false;
    }

    const isMatch = await bcrypt.compare(oldPassword, existingUser.password);
    if (!isMatch) {
        return false; // old password incorrect
    }

    existingUser.password = newPassword; // No need to hash because hashing is handled by User Object (for some reason)
    await existingUser.save();

    return true;
};

export const changeNick = async (
    userId: string,
    oldNick: string,
    newNick: string
): Promise<boolean> => {
    const existingUser = await User.findById(userId);

    if (!existingUser) {
        return false;
    }

    if (oldNick === newNick) {
        return false; // same name
    }

    existingUser.nickname = newNick;
    await existingUser.save();

    return true;
};
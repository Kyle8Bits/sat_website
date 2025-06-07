import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export enum UserRole {
    Coordinator = 'Coordinator',
    Leader = 'Leader',
    Staff = 'Staff',
}

export enum UserGroup {
    Group1 = 1,
    Group2,
    Group3,
    Group4,
    Group5,
    Group6,
}

export interface IUser extends Document {
    password: string;
    nickname: string;
    email: string;
    phone?: string;
    group: UserGroup;
    role: UserRole;
    createdAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    nickname: { type: String, required: true },
    phone: { type: String, unique: true },

    group: { type: Number, required: true, enum: Object.values(UserGroup).filter(v => typeof v === 'number') },
    role: { type: String, required: true, enum: Object.values(UserRole)},

    createdAt: { type: Date, default: Date.now },
}, { collection: 'user' });

// Hash the password before saving
UserSchema.pre<IUser>('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (err) {
            return next(err as any);
        }
    }
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
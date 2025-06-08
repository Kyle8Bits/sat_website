import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for a User document
export interface ISATEmail extends Document {
    email: string;
}

// Define the schema
const UserSchema: Schema<ISATEmail> = new Schema(
    {
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true } // adds createdAt and updatedAt fields
);

// Create and export the model
const allowedEmail = mongoose.model<ISATEmail>('sat_email', UserSchema);
export default allowedEmail;

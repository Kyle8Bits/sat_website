import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  school?: string;
  date?: string;
  headcount?: string;
  lunch?: boolean;
  group?: string;
  status?: 'stand-by' | 'sharing' | 'campus-tour' | 'lunch' | 'farewell' | 'dont' | 'idle';
  type?: 'HST' | 'PID' | 'AD' | 'ED';
}

const EventSchema: Schema = new Schema(
  {
    school: { type: String },
    date: { type: String }, // You can change this to Date if you prefer
    headcount: { type: String }, // Consider changing to Number if not always string
    lunch: { type: Boolean, default: false },
    group: { type: String },
    status: {
      type: String,
      enum: ['stand-by', 'sharing', 'campus-tour', 'lunch', 'farewell', 'dont', 'idle'],
    },
    type: {
      type: String,
      enum: ['HST', 'PID', 'AD', 'ED'],
    },
  }
,{ collection: 'events' });

export default mongoose.model<IEvent>('Event', EventSchema);

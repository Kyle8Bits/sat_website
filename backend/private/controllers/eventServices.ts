import Event, {IEvent} from '../models/Events'
import { Request, Response } from 'express';

export const getAllEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find(); // Fetch all documents
    res.status(200).json(events);

  } catch (error) {
    console.error('Failed to fetch events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
};
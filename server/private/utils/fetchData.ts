import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import axios from 'axios';
import {UserObject} from '../models/User'

const filePath = path.join(__dirname, '../../../test_database/users.json');

const fetchUsers = async (): Promise<UserObject[]> => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const users: UserObject[] = JSON.parse(data);
        // res.status(200).json({ message: 'Fetch successful' });
        return users;

    } catch (error) {
        // res.status(400).json({ message: 'Fetch failed' });
        console.error('Failed to read user data:', error);
        return [];
    }
}

export default fetchUsers;

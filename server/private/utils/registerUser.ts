import fs from 'fs';
import path from 'path';
import { UserObject } from '../models/User';

const filePath = path.join(__dirname, '../../../test_database/users.json');

export function saveUser(newUser: UserObject): void {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const users: UserObject[] = JSON.parse(data);
        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
    } catch (error) {
        console.error('Failed to save user:', error);
    }
}

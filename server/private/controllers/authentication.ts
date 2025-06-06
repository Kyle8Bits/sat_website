import express from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {UserObject} from '../models/User'
import fetchUsers from '../utils/fetchData';
import { saveUser } from '../utils/registerUser';

const sampleUser = {
    email: "SAT",
    password: "admin123"
};

// export const getAllUsers = async (req: Request, res: Response) => {
//     try {
//         const users = await fetchUsers();
//         res.status(200).json({ message: 'Fetch successful', users });
//     } catch (error) {
//         res.status(500).json({ message: 'Fetch failed' });
//     }
// };

let userTestArray: UserObject[] = [];

// Populate it once at module load
(async () => { 
    try {
        userTestArray = await fetchUsers();
        console.log(userTestArray);
        userTestArray.push(sampleUser); // Add admin
    } catch (error) {
        console.error(error);
    }
})();

const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = userTestArray.find(user => user.email === email);

        if (!(email) || !(password)) {
            res.status(400).json({ message: 'Please fill out all fields' });
            return;
        }

        if (!user) {
            res.status(400).json({ message: 'User not found' });
            return;
        }

        if (!(await bcrypt.compare(password, user.password))) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        if (user.email === sampleUser.email && password === sampleUser.password) {
            res.status(200).json({ message: 'Welcome admin' });
            return;
        }

        if (await bcrypt.compare(password, user.password)) {
            res.status(200).json({ message: 'Login successful' });
            return;
        }

        res.status(200).json({ message: 'LastTest' });

    } catch (error) {
        // console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;

    }


};

const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, passwordConfirm } = req.body;
        const user = userTestArray.find(user => user.email === email);

        if (!(email) || !(password) || !(passwordConfirm)) {
            res.status(400).json({ message: 'Please fill out all fields' });
            return;
        }

        if (user) {
            res.status(400).json({ message: 'Email already used' });
            return;
        }

        if (password !== passwordConfirm) {
            res.status(400).json({ message: 'Passwords are different' });
            return;
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = { email: email, password: hashPassword };

        console.log(hashPassword);
        res.status(200).json({ message: 'Account created' });
        
        userTestArray.push(newUser);
        saveUser(newUser);

        return;

    } catch (error) {
        // console.error('Error in public route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;

    }
};

export { loginUser, registerUser };



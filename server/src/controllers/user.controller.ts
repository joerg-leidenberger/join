import { Request, Response } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET as string;

async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('This user already exists.');
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).send('User successfully registered.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during user registration.');
  }
}

async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found.');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Wrong password.');
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
      expiresIn: '72h',
    });

    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during login.');
  }
}

async function getUserName(req: Request, res: Response) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send('No token provided.');
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as jwt.JwtPayload;

    if (!decoded.userId) {
      return res.status(401).send('Unauthorized access.');
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).send('User not found.');
    }

    res.json({ name: user.name });
  } catch (error) {
    console.error(error);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send('Invalid token.');
    }
    res.status(500).send('Error fetching user information.');
  }
}

export { signUp, login, getUserName };

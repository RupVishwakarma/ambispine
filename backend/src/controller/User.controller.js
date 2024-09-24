import { User } from '../modal/user.modal.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function Registration(req, res) {
  try {
     const { name, email, mobile, password, confirmPassword } = req.body;
     if (password !== confirmPassword) {
     return res.status(400).json({ message: 'Passwords do not match' });
     }
     
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      password: hashPassword,
    }); 

    const accessToken = jwt.sign(
      { 
        userId: newUser._id,
        email: newUser.email, 
        name: newUser.name
      },
      process.env.ACCESS_TOKEN_SECRET, 
      { 
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
       }
    );
    const refreshToken = jwt.sign(
      {
        userId: newUser._id,
        email: newUser.email 
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      } 
      
    )
    newUser.refreshToken = refreshToken

    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.log('register user ', error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
}

export async function Login(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({
      $or: [{ name }, { email }]
    });
    if (!user) {
      return res.status(400).send("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Password does not match");
    }

    // Successful login response
    res.status(200).json({
      message: "User login successful",
      email: user.email,
      name: user.name
    });
  } catch (error) {
    console.log("User login error", error);
    res.status(500).send("Internal Server Error");
  }
}




const express = require("express");
const router = express.Router();
const User = require("../models/User");

 router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();

        res.json({ message: "User registered successfully!" });
        } catch (err) {
            res.status(500).json({
                message: "Registration failed",
                error: err.message
            });
        }
    
 });

 router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(400).json({
                message: "Invalid username or password"
            });
        }
        res.json({
            message: "Login successful!"
        });

    } catch (err) {
        res.status(500).json({
            message: "Login failed",
            error: err.message
        });
    }
 })

 module.exports = router;

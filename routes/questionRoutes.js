const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;

        const newQuestion = new Question({
            title,
            content,
            category: "General",
            author: "User"
        });
        
        await newQuestion.save();

        res.json({ message: "Question posted successfuly!" });
    } catch (err) {
        res.status(500).json({
            message: "Question failed",
            error: err.message
        });
    }
});

router.get("/", async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

router.delete("/:id", async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Question deleted successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed" });
    }
});

router.post("/edit/:id", async (req, res) => {
    try {
        const { title, content } = req.body;

        await Question.findByIdAndUpdate(req.params.id, {
            title,
            content
        });

        res.json({
            message: "Question updated successfully!"
        });

    } catch (err) {
        res.status(500).json({
            message: "Update failed"
        });
    }
});

module.exports = router;
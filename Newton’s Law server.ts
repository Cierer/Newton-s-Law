// Import required libraries
import express from "express";
import cors from "cors";

// Create Express application
const app = express();

// Enable Cross-Origin requests (frontend ↔ backend)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// API endpoint to calculate final velocity
app.post("/api/final-velocity", (req, res) => {

    // Extract data sent from frontend
    const { vi, a, t, userAnswer, attempts } = req.body;

    // Calculate correct answer (rounded to 2 decimal places)
    const correct = Number((vi + a * t).toFixed(2));

    // Track number of attempts
    let tries = attempts;

    // If user answer is incorrect
    if (userAnswer !== correct) {
        tries++;

        // If max attempts reached
        if (tries >= 3) {
            return res.json({
                attempts: tries,
                message: `Max attempts reached. Correct answer: ${correct}`
            });
        }

        // Prompt user to try again
        return res.json({
            attempts: tries,
            message: "Incorrect. Try again."
        });
    }

    // If answer is correct
    res.json({
        attempts: tries,
        message: `Correct! Final velocity = ${correct}`
    });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());

// Built-in body parsers (no body-parser needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Both fields are required" });
    }

    console.log("User Logged In:", { email, password });
    res.json({ message: "Logged in successfully!" });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});

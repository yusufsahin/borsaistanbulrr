const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();

// Use CORS middleware to allow all origins
app.use(cors());
app.use(bodyParser.json());

// Secret key for JWT signing
const SECRET_KEY = "my_super_secret_key";

// In-memory data stores (for simplicity)
const users = [
    {
        id: 1,
        username: "admin",
        password: bcrypt.hashSync("password", 10), // Pre-hashed password
    },
];
let notes = [
    { id: 1, name: "Sample Note", description: "This is a sample note." },
];

// Route: Register a new user
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    // Check if the username already exists
    if (users.find((u) => u.username === username)) {
        return res.status(409).json({ message: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: users.length + 1, username, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully." });
});

// Route: User login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
    });

    res.json({ message: "Login successful.", token });
});

// Middleware: Authenticate JWT tokens
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access token is missing." });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }

        req.user = user;
        next();
    });
}

// Route: Get all notes (protected)
app.get("/notes", authenticateToken, (req, res) => {
    res.json(notes);
});

// Route: Add a new note (protected)
app.post("/notes", authenticateToken, (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: "Name and description are required." });
    }

    const newNote = {
        id: notes.length + 1,
        name,
        description,
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

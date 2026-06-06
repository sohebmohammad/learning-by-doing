const express = require('express');
const app = express();

// 1. Basic GET Route
app.get('/', (req, res) => {
    res.json({ message: "Hi " });
});

const streaming = [
    "I am soheb mohammad", 
    "Software Engineer", 
    "Full stack developer", // Fixed typo in "stack" and "developer"
    "My tech stack MERN, java, firebase, RAG systems"
];

// FIXED: Added space after async
app.get("/streaming", async (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();

    for (let chunk of streaming) {
        res.write(`data: ${chunk}\n\n`); // SSE format: "data: <message>\n\n"
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    res.end();
});

app.listen(3000, () => console.log('Server running on port 3000'));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock endpoints for video and voice generation
app.get('/api/generate-video', (req, res) => {
    res.json({ message: "Sample video generated!" });
});

app.get('/api/generate-voice', (req, res) => {
    res.json({ message: "Sample voice generated!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
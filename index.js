const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: { origin: "*" }
});

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/riders', require('./routes/riderRoutes'));

// Socket.IO: Listen for location updates
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('updateLocation', ({ id, latitude, longitude, type }) => {
        // Broadcast updated location to clients
        socket.broadcast.emit('locationUpdate', { id, latitude, longitude, type });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const http = require('http'); // To create an HTTP server
const socketIo = require('socket.io'); // Socket.IO package
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const riderRoutes = require('./routes/riderRoutes');
const cors = require('cors');

const app = express();

// Create an HTTP server and pass the Express app
const server = http.createServer(app);

// Initialize Socket.IO with the HTTP server
const io = socketIo(server);

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes (register/login)
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/riders', riderRoutes); // Rider-related routes

// Socket.IO Event Handlers
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for 'locationUpdate' events from the client
    socket.on('locationUpdate', (data) => {
        console.log('Location Update:', data);
        
        // Emit the location update to all connected clients (broadcasting)
        // You could also emit it to a specific user or room based on your use case
        socket.broadcast.emit('locationUpdate', data); // This broadcasts to everyone except the sender
        
        // Optionally, send an acknowledgment back to the sender
        socket.emit('locationUpdateSuccess', { message: 'Location updated successfully!' });
    });

    // Listen for disconnection
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Server setup
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
